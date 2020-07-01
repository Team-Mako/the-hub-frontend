import React, { Component } from 'react';
import PostSection from './PostSection';
import CallToAction from '../../components/CallToAction';
import { DrinkCover } from '../../components/Assets';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <main className="category-section">
          <div className="category-section__inner">

            <div className="hero-section">

              <div className="hero-section__left">
                <h1>Have fun creating<br /> delicious drinks</h1>
                <p>Fresh and fruity, with or<br /> without alcohol, it’s your<br /> choice. Find the best recipes<br /> to <strong>try it yourself.</strong></p>
              </div>

              <div className="hero-section__right">
                <img src={DrinkCover} alt="A Hero of a Purple Cocktail" />
              </div>

            </div>

          </div>
        </main>

        <PostSection />
        <CallToAction />
      </>
    );
  }
}

export default Category;
