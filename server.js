  
  /* server.js */

  const cors = require('cors');
  const uuid = require('uuid').v4;
  const next = require('next');
  const Pusher = require('pusher');
  const logger = require('morgan');
  const express = require('express');
  const bodyParser = require('body-parser');
  const dotenv = require('dotenv').config();

  const dev = process.env.NODE_ENV !== 'production';
  const port = process.env.PORT || 3000;

  const app = next({ dev });
  const handler = app.getRequestHandler();

  // Ensure that your pusher credentials are properly set in the .env file
  // Using the specified variables
  const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    encrypted: true
  });

  app.prepare()
    .then(() => {

      const server = express();

      server.use(cors());
      server.use(logger('dev'));
      server.use(bodyParser.json());
      server.use(bodyParser.urlencoded({ extended: true }));

    // Initialize loops through the list of 15 people and creates a person object 
    // for each of them with random position coordinates based on a 
    // reference position. It then returns the collection of person objects

      const initializePeople = ({ lat, lng }) => {

        const randomInRange = num => (width = 0.01) => ((Math.random() * width * 2) + num - width);

        const randomLat = randomInRange(lat);
        const randomLng = randomInRange(lng);

        const people = [ 'Stephanie', 'John', 'Steve', 'Anna', 'Margaret', 'Felix', 'Chris', 'Jamie', 'Rose', 'Bob', 'Vanessa', '9lad', 'Bridget', 'Sebastian', 'Richard' ];

        return people.map(name => ({
          name,
          id: uuid(),
          position: { lat: randomLat(0.0075), lng: randomLng(0.02) },
          online: false
        }));

      };

      const referencePosition = { lat: 6.4311415, lng: 3.4625833 };

      let people = initializePeople(referencePosition);

      server.get('/people', (req, res, next) => {
        res.json({ status: 'success', people });
      });

      server.post('/transit/:id', (req, res, next) => {
        const id = req.params.id;
        const { lat, lng } = req.body;

        people.forEach((person, index) => {
          if (person.id === id) {
            people[index] = { ...person, position: { lat, lng } };

            pusher.trigger('map-geofencing', 'transit', {
              person: people[index], people
            });
          }
        });
      });

      server.post('/:presence/:id', (req, res, next) => {
        const id = req.params.id;
        const presence = req.params.presence;

        if (['online', 'offline'].includes(presence)) {
          people.forEach((person, index) => {
            if (person.id === id) {
              return people[index] = { ...person, online: presence === 'online' };
            }
          });
        }
      });

      server.get('*', (req, res) => {
        return handler(req, res);
      });

      server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
      });

    })
    .catch(ex => {
      console.error(ex.stack);
      process.exit(1);
    });

    


    // Creating people collection by calling initializePeople function with reference position

    // Define server routes 
    // GET /people => client req to /people endpoint gets current people collection from server response


    // fetching the ID of the person from the id route parameter.
    // We then fetch the person’s current position from req.body 
    // through the help of the body-parser middleware we added earlier.

    // we update the person’s position on the people collection. 


    // We trigger a transit event on the map-geofencing Pusher channel,
    // passing the updated person and people collection.
    // This is important for the realtime behavior of the app.


    // The presence parameter can be either online or offline.
    // We simply set the online status of the person with the given id parameter
    // to either true or false based on the value of presence


  