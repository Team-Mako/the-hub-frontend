import React, { Component } from 'react';
import Axios from 'axios';
import HeroArea from '../components/HeroArea';

class Home extends Component {
  state = {
    bestOf: [],
  }

  componentDidMount() {
    Axios.get('http://localhost:3030/')
      .then((res) => this.setState({ bestOf: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <HeroArea />
        <h3>
          Best of The HUB
          <br />
          This Week
        </h3>
        <section className="best-of">
          {this.state.bestOf.map((item) => <div key={item.title}>{item.title}</div>)}
        </section>
      </>
    );
  }
}

export default Home;
