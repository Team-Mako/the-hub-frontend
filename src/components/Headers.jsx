import React from 'react';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import SiteHeader from './SiteHeader';
import MobileHeader from './MobileHeader';

function Headers({ auth, searchBar }) {
  return (
    <>
      <MediaQuery maxDeviceWidth={700}>
        <MobileHeader session={auth.session} />
      </MediaQuery>
      <MediaQuery minDeviceWidth={701}>
        <SiteHeader session={auth.session} searchBar={searchBar} />
      </MediaQuery>
    </>
  );
}

export default connect((state) => ({
  auth: state.auth,
}))(Headers);
