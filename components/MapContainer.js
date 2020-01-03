import axios from 'axios';
import React, { Fragment, Component } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap } from 'react-google-maps';

import UserMarker from './UserMarker';
import PersonMarker from './PersonMarker';

class MapContainer extends Component {

  //withinRegion() method enables us to determine if a point is within a defined circular region.
  // It takes the center and radius of the region as its arguments, and returns a function. 
  // The returned function takes a point as argument and returns if the point is in the region.

  withinRegion = (position, radius) => {
    const to = new google.maps.LatLng(position.lat, position.lng);
    const distance = google.maps.geometry.spherical.computeDistanceBetween;
    return point => {
      const from = new google.maps.LatLng(point.lat, point.lng);
      return distance(from, to) <= radius;
    }
  }

  analyzeRegion = (position, radius) => people => {
    const { onRegionFiltered = f => f } = this.props;
    const withinRegion = this.withinRegion(position, radius);

    const mappedPeople = people.map(person => {
      const { position } = person || {};
      const within = withinRegion(position);
      return { ...person, within };
    });

    onRegionFiltered(mappedPeople);
  }

  componentDidMount() {

    const { person: { id, position }, radius, people = [], channel = null } = this.props;
    const mapContext = this.map.context['__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'];
    const setMapCenter = mapContext.setCenter.bind(mapContext);

    let { lat, lng } = position;

    channel && channel.bind('transit', ({ person = {}, people }) => {
      const { id: $id, position: $position } = person;
      const isUser = id === $id;
      const center = isUser ? $position : position;

      isUser && setMapCenter(center);
      this.analyzeRegion(center, radius)(people);
    });

    this.positionUpdate = setInterval(() => {
      lat = lat + Math.random() * 0.001;
      lng = lng + Math.random() * 0.001;

      axios.post(`/transit/${id}`, { lat, lng });
    }, 10000);

    this.analyzeRegion(position, radius)(people);

  }

  componentWillUnmount() {
    clearInterval(this.positionUpdate);
  }

  // Here we render the GoogleMap component passing the position of the current user as the center prop. 
  // We loop through the people collection received by the MapComponent and render different types of makers based on the person.

  render() {
    const { person: { id, position }, radius, people, channel } = this.props;

    // ref will give us access to the underlying google.maps.Map instance, which we will need later to update the map properties.

    // We use UserMarker for the currently active user and the PersonMarker for other people.
    // We also pass the radius, person and channel props to the marker components. 
    // The channel prop contains a reference to the current Pusher channel subscription.

    // For the PersonMarker component, we pass in the currently active user to the user prop.
    // We also pass in an inverted version of the withinRegion() method to the withinRegion prop.

    return (
      <GoogleMap ref={elem => this.map = elem} zoom={15} center={position}>
        <Fragment>
          { people.map((person, index) => {

            const props = { key: index, radius, person, channel };
            const withinRegion = point => (position, radius) => this.withinRegion(position, radius)(point);

            return (person.id === id)
              ? <UserMarker {...props} />
              : <PersonMarker user={this.props.person} withinRegion={withinRegion} {...props} />

          }) }
        </Fragment>
      </GoogleMap>
    );
  }

};

export default withScriptjs(withGoogleMap(MapContainer));