import React, { Component } from 'react';
import { FaHeart, FaEye, FaChevronDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import CallToAction from '../../components/CallToAction';
import { DrinkCover, PostCoverExample, AuthorImgExample } from '../../components/Assets';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Seriously Good White Russian Cocktail Recipe',
      title2: 'Seriously Good White',
    };
  }

  render() {
    const { title, title2 } = this.state;

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

        <section className="post-section">

          <div className="post-section__inner">

            <form>
              <label>
                Made with
                <Dropdown options={['one', 'two', 'three', 'four']} onChange={this._onSelect} placeholder={<div className="optionWrapper"><span>Select</span>  <FaChevronDown /></div>} />
              </label>
              <label>
                Time to make it
                <Dropdown options={['one', 'two', 'three', 'four']} onChange={this._onSelect} placeholder={<div className="optionWrapper"><span>Select</span>  <FaChevronDown /></div>} />
              </label>
              <label>
                Type
                <Dropdown options={['one', 'two', 'three', 'four']} onChange={this._onSelect} placeholder={<div className="optionWrapper"><span>Select</span>  <FaChevronDown /></div>} />
              </label>

              <button>FILTER</button>
            </form>

            <div className="post-section__list">
              <NavLink to="/" className="post-section__box">
                <img className="post-section__cover" src={PostCoverExample} alt="Img of a drink" />
                <h3>{title}</h3>

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
                <h3>{title2}</h3>

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

          <button>LOAD MORE</button>

        </section>

        <CallToAction />
      </>
    );
  }
}

export default Category;
