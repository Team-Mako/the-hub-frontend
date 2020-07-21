import React from 'react';
import PostSection from './PostSection';
import CallToAction from '../../components/CallToAction';
import { HeroImg } from '../../components/Assets';

const Category = () => (
  <>
    <main className="category-section">
      <div className="category-section__inner">

        <div className="hero-section">

          <div className="hero-section__left">
            <h1>Have fun creating<br /> delicious drinks</h1>
            <p>Fresh and fruity, with or<br /> without alcohol, it’s your<br /> choice. Find the best recipes<br /> to <strong>try it yourself.</strong></p>
          </div>

          <div className="hero-section__right">
            <img src={HeroImg} alt="Cover Hero" />
          </div>

        </div>

      </div>
    </main>

    <PostSection />
    <CallToAction />
  </>
);

export default Category;
