import React, { Component } from 'react';
import CallToAction from '../components/CallToAction';
import { HeroImg } from '../components/Assets';

class Home extends Component {

  render() {
    return (
      <>
      <main className="home-main">
        <div className="home-main__inner">

          <div className="home-main__hero">

            <div className="home-main__left">
              <h1>Discover your DIY for today</h1>
              <p>The HUB is the best place to find & showcase any project that <span>you can do it yourself</span></p>
            </div>

            <div className="home-main__right">
              <img src={ HeroImg } alt="The Hub Hero"/>
            </div>

          </div>

          <div className="home-main__best-of">

          </div>

          <div className="home-main__categories">

          </div>

        </div>
      </main>

      <CallToAction />
      </>
    );
  }
}

export default Home;
