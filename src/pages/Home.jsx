import React, { Component } from 'react';
import { FaSearch, FaHeart, FaEye } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { HeroImg, PostCoverExample, AuthorImgExample } from '../components/Assets';

class Home extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
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

            <section className="post-section">

              <div className="post-section__inner">

                <h2 className="home-main__title">Best of The HUB<br /> <span>This Week</span></h2>

                <div className="post-section__list">
                  <NavLink to="/" className="post-section__box">
                    <img className="post-section__cover" src={PostCoverExample} alt="Img of a drink" />
                    <h3>Seriously Good White Russian Cocktail Recipe</h3>

                    <div className="post-section__details">

                      <div className="post-section__author">
                        <img src={AuthorImgExample} alt="Img of the post creator" />
                        <p>Leona</p>
                      </div>

                      <div className="post-section__meta">
                        <span><FaHeart /> 609</span>
                        <span><FaEye /> 120</span>
                      </div>

                    </div>
                  </NavLink>

                  <NavLink to="/" className="post-section__box">
                    <img className="post-section__cover" src={PostCoverExample} alt="Img of a drink" />
                    <h3>Seriously Good White Russian Cocktail Recipe</h3>

                    <div className="post-section__details">

                      <div className="post-section__author">
                        <img src={AuthorImgExample} alt="Img of the post creator" />
                        <p>Leona</p>
                      </div>

                      <div className="post-section__meta">
                        <span><FaHeart /> 609</span>
                        <span><FaEye /> 120</span>
                      </div>

                    </div>
                  </NavLink>

                  <NavLink to="/" className="post-section__box">
                    <img className="post-section__cover" src={PostCoverExample} alt="Img of a drink" />
                    <h3>Seriously Good White Russian Cocktail Recipe</h3>

                    <div className="post-section__details">

                      <div className="post-section__author">
                        <img src={AuthorImgExample} alt="Img of the post creator" />
                        <p>Leona</p>
                      </div>

                      <div className="post-section__meta">
                        <span><FaHeart /> 609</span>
                        <span><FaEye /> 120</span>
                      </div>

                    </div>
                  </NavLink>
                </div>

              </div>

            </section>

            <div className="home-main__categories" />

          </div>
        </main>

        <CallToAction />
      </>
    );
  }
}

export default Home;
