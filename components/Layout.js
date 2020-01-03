//We are simply using the next/head component to add meta information to the <head> of our pages. 
// We have also added a link to the Bootstrap CDN file to add some default styling to our app.
// We are also setting the page title dynamically from props and rendering the page contents using {props.children}.

import React, { Fragment } from 'react';
import Head from 'next/head';

const Layout = props => (
  <Fragment>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      <title>{props.pageTitle || 'Realtime Geofencing'}</title>
    </Head>
    {props.children}
  </Fragment>
);

export default Layout;