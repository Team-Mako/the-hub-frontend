import React from 'react';
import MediaQuery from 'react-responsive';
import SiteHeader from './SiteHeader';
import MobileHeader from './MobileHeader';

function Headers() {
  return (
    <>
      <MediaQuery maxDeviceWidth={420}>
        <MobileHeader />
      </MediaQuery>
      <MediaQuery minDeviceWidth={420}>
        <SiteHeader />
      </MediaQuery>
    </>
  );
}

export default Headers;
