import React from 'react';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import SiteHeader from './SiteHeader';
import MobileHeader from './MobileHeader';

function Headers({ auth }) {
  return (
    <>
      <MediaQuery maxDeviceWidth={420}>
        <MobileHeader session={auth.session} />
      </MediaQuery>
      <MediaQuery minDeviceWidth={420}>
        <SiteHeader session={auth.session} />
      </MediaQuery>
    </>
  );
}

export default connect((state) => ({
  auth: state.auth,
}))(Headers);
