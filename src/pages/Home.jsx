import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';

class Home extends Component {
  state = { }

  render() {
    return (
      <section className="hero-area">
        <h1>Discover your DIY for today</h1>
        <p>The is the best place to find & showcase any project that you can do it yourself</p>
        <form>
          <input type="text" placeholder="What do you want to create?" />
          <button type="button"><FaSearch /></button>
        </form>
      </section>
    );
  }
}

export default Home;
