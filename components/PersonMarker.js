import React, { Component } from 'react';
    import { Marker } from 'react-google-maps';

    const BLACK_MARKER = 'https://i.imgur.com/8dOrls4.png?2';
    const GREEN_MARKER = 'https://i.imgur.com/9v6uW8U.png';

    // The PersonMarker component stores the position of the person in the position property of the component’s state 
    // and the position of the current active user in the userPosition property of the state.
    class PersonMarker extends Component {

      constructor(props) {
        super(props);

        const {
          user: { id: userID, position: userPosition },
          person: { id = null, position = null },
          channel = null
        } = this.props;

        this.id = id;
        this.userID = userID;
        this.channel = channel;

        this.state = { position, userPosition };
      }

      // we bind to the transit event on the Pusher channel, and update the state with the new position of the person or currently active user. 
      // We update the state’s position when the person’s position changes, and the userPosition when the currently active user’s position changes.
      componentDidMount() {
        this.channel && this.channel.bind('transit', ({ person = {} }) => {
          const { id, position } = person;
          (id === this.id) && this.setState({ position });
          (id === this.userID) && this.setState({ userPosition: position });
        });
      }

      // withinRegion() method received as prop to check if the person is within the defined circular region of the currently active user. 
      // We then conditionally render a green marker icon if the person is within the region, otherwise, we render a black icon.
      render() {
        const { position, userPosition } = this.state;
        const { person: { name }, radius, withinRegion = f => f } = this.props;

        const within = !!(withinRegion(position)(userPosition, radius));

        const MARKER_SIZE = new google.maps.Size(25, 35);
        const MARKER_ICON = within ? GREEN_MARKER : BLACK_MARKER;

        return <Marker position={position} title={name} options={{ icon: { url: MARKER_ICON, scaledSize: MARKER_SIZE } }} />
      }

    };

    export default PersonMarker;