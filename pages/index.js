
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import Layout from '../components/Layout';
import ChoosePersona from '../components/ChoosePersona';
import Map from '../components/Map';
import NearbyFriends from '../components/NearbyFriends';

class IndexPage extends Component {

  // Initialize state with two props
    //id = UUID to identify current user
    // people = array of people with their respective coordinates

  state = { id: null, people: [] }

  // endConnection() method terminates the current Pusher connection and 
  // also sends an /offline request to the server for the current user. 
  // The endConnection() method is called before the component is unmounted or before the page is unloaded.
  endConnection = () => {
    this.pusher.disconnect();
    axios.post(`/offline/${this.state.id}`);
  }

  // This happens before mounting occurs and called before render
  componentWillMount() {
    this.pusher = new Pusher(process.env.PUSHER_APP_KEY, {
      cluster: process.env.PUSHER_APP_CLUSTER,
      encrypted: true
    });

    this.channel = this.pusher.subscribe('map-geofencing');
  }

  // fetch the people collection from the server by making a GET HTTP request using axios to the /people endpoint.
  // We then update the state with the people collection gotten from the response.
  componentDidMount() {
    axios.get('/people').then(({ data }) => {
      const { people = [] } = data;
      this.setState({ people });
    });

    window.onbeforeunload = this.endConnection;
  }

  componentWillUnmount() {
    this.endConnection();
  }

  personaSelected = id => {
    this.setState({ id });
    axios.post(`/online/${id}`);
  }

  regionFiltered = people => this.nearby.updatePeople(people)

  render() {

    const { id, people } = this.state;
    const person = people.find(person => person.id === id) || {};
    const peopleOffline = people.filter(person => !person.online);

    return (
      <Layout pageTitle="Realtime Geofencing">
        <main className="container-fluid position-absolute h-100 bg-light">
          {
            id ? <div className="row position-absolute w-100 h-100">

              <section className="col-md-9 px-0 border-right border-gray position-relative h-100">
                <Map person={person} radius={1000} people={people} channel={this.channel} onRegionFiltered={this.regionFiltered} />
              </section>

              <section className="col-md-3 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0">
                <NearbyFriends ref={elem => this.nearby = elem} person={person} />
              </section>

            </div>
            : <ChoosePersona count={5} people={peopleOffline} onSelected={this.personaSelected} />
          }
        </main>
      </Layout>
    );
  }
};

export default () => <IndexPage />