    /* next.config.js */

    // Configuring webpack to be able to provide the environment variables
    // we have defined and make them available to our React components 
    // by accessing the process.env object

    const webpack = require('webpack');
    require('dotenv').config();

    module.exports = {
      webpack: config => {
        const env = Object.keys(process.env).reduce((acc, curr) => {
          acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
          return acc;
        }, {});

        config.plugins.push(new webpack.DefinePlugin(env));

        return config;
      }
    };