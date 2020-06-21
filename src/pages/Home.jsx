import React, { Component } from 'react';
import CallToAction from '../components/CallToAction';
import SearchForm from '../components/SearchForm';

class Home extends Component {

  render() {
    return (
      <main>
        {/* Hero Image Part */}
        <div>
          {/* Hero Image */}
          <img />

          {/* Heading For Mobile */}
          <h1>Find a new <span>hobby</span> and have fun</h1>

          {/* Heading For Desktop */}
          <h1>Discover your DIY for today</h1>
          <p>The HUB is the best place to find & showcase any project that <span>you can do it yourself</span></p>

          <SearchForm />
        </div>



        <div>
          <h2>Best of The HUB <span>This Week</span></h2>
          
          <ul>
            {/* Posts */}
          </ul>
        </div>

        <div>
          <h2>Browse DIY projects <span>By category</span></h2>
          <p>The HUB is the best place to find & showcase any project that <span>you can do it yourself</span></p>

          <ul>
            {/* Category Buttons */}
          </ul>
        </div>

        <CallToAction />
      </main>
    );
  }
}

export default Home;
