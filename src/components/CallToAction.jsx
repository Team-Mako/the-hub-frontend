import React from 'react';
import { NavLink } from 'react-router-dom';

const CallToAction = () => {
    return(
      <section className="call-to">
        <div className="call-to__gradient">
          <div className="call-to__inner">

            <h2>Join The HUB community to <br /> share your do it yourself project.</h2>

            <p>Let’s make it! See other DIY projects that <br /> people love & participate yourself.</p>

            <NavLink to="/">Sign Up</NavLink>

          </div>
        </div>
      </section>
    );
  }

  export default CallToAction;
