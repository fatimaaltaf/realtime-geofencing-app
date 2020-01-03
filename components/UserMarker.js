import React, { Fragment, Component } from 'react';
import { Marker, Circle } from 'react-google-maps';

// The UserMarker component stores the position of the current active user in the position property of the component’s state.

  class UserMarker extends Component {

    constructor(props) {
      super(props);
      const { person: { id = null, position = null }, channel = null } = this.props;

      this.id = id;
      this.channel = channel;
      this.state = { position };
    }

    // we bind to the transit event on the Pusher channel, and update the state with the new position of the user. 
    // We only update the state when the current user’s position changes.
    componentDidMount() {
      this.channel && this.channel.bind('transit', ({ person = {} }) => {
        const { id, position } = person;
        (id === this.id) && this.setState({ position });
      });
    }

    // we render a red marker icon for the currently active user by setting the MARKER_ICON constant as the marker icon URL.
    // We also render a Circle region using the user’s current position as center and the radius received as prop.
    render() {

      const { radius } = this.props;
      const { position } = this.state;
      const regionOptions = { fillOpacity: 0.1, strokeWidth: 1, strokeOpacity: 0.2 };

      const MARKER_SIZE = new google.maps.Size(50, 70);
      const MARKER_ICON = 'https://i.imgur.com/Rhv5xQh.png';

      return <Fragment>
        <Marker position={position} title="You" options={{ icon: { url: MARKER_ICON, scaledSize: MARKER_SIZE } }} />
        <Circle center={position} radius={radius} options={regionOptions} />
      </Fragment>

    }
  };

  export default UserMarker;