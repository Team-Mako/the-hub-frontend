import React from 'react';
import { FaSearch } from 'react-icons/fa';
import CallToAction from '../../components/CallToAction';
import { HeroImg } from '../../components/Assets';
import PostSection from './PostSection';
import CategoryList from './CategoryList';

function Home() {
  return (
    <>
      <main className="home-main">
        <div className="home-main__inner">

          <section className="hero-section">

            <div className="hero-section__left">
              <h1>Discover your <br /> DIY for today</h1>

              <p>The HUB is the best place to <br /> find & showcase any project<br /> that <strong>you can do it yourself</strong></p>

              <form>
                <input type="search" placeholder="What do you want to create?" />
                <button type="button"><span aria-hidden="true" className="visually-hidden">Search Button</span><FaSearch /></button>
              </form>
            </div>

            <div className="hero-section__right">
              <img src={HeroImg} alt="The Hub Hero" />
            </div>

          </section>

        </div>
      </main>

      <PostSection />
      <CategoryList />
      <CallToAction />
    </>
  );
}

export default Home;
