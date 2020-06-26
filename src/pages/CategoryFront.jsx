import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import CallToAction from '../components/CallToAction';
import {DrinkCover, PostCoverExample, AuthorImgExample} from '../components/Assets';
import {FaHeart, FaEye, FaChevronDown} from 'react-icons/fa'


class Category extends Component{

  render(){
    return(
      <>
      <main className="category-front">

        <div className="category-front__inner">
            {/* HERO PART*/}
            <div className='category-front__hero'>

              <div className='category-front__left'>
                <h1>Have fun creating delicious drinks</h1>
                <p>Fresh and fruity, with or without alcohol, it’s your choice. Find the best recipes to try it your self.</p>
              </div>

              <div className='category-front__right'>
                <img src={ DrinkCover } alt="A Hero Image of a Purple Cocktail"/>
              </div>

            </div>

            {/*  SEARCH FILTER */}
            <div className='category-front__filter'>
              <form>

                  <label>
                    Made with
                    <Dropdown options={['one', 'two', 'three', 'four']} onChange={this._onSelect}  placeholder={<div className='optionWrapper'><span>Select</span>  <FaChevronDown /></div>} />
                  </label>
                  <label>
                    Time to make it
                    <Dropdown options={['one', 'two', 'three', 'four']} onChange={this._onSelect}  placeholder={<div className='optionWrapper'><span>Select</span>  <FaChevronDown /></div>} />
                  </label>
                  <label>
                    Type
                    <Dropdown options={['one', 'two', 'three']} onChange={this._onSelect}  placeholder={<div className='optionWrapper'><span>Select</span>  <FaChevronDown /></div>} />
                  </label>

                <button>FILTER</button>
              </form>
            </div>

            {/*  POSTS CONTAINER */}
            <div className="postTileContainer">

              <ul>
                <li className="postTile">
                  {/* Post Img */}
                  <img src={PostCoverExample} alt="Img of a drink" className="postTile__postCover"/>
                  {/* Post Title */}
                  <h3>Seriously Good White Russian Cocktail Recipe</h3>

                  <div className="postTile__metaWrapper">
                    {/* Author Avator */}
                    <div className="postTile__authorWrapper"><img src={AuthorImgExample} alt="Img of the post creator" />
                    {/* Author Name */}
                    <p>Leona Davis</p></div>
                    {/* Favorite */}
                    <p><span><FaHeart />609</span>
                    {/* View Counter */}
                    <span><FaEye />120</span></p>
                  </div>
                </li>

                <li className="postTile">
                  {/* Post Img */}
                  <img src={PostCoverExample} alt="Img of a drink" className="postTile__postCover"/>
                  {/* Post Title */}
                  <h3>Seriously Good White Russian Cocktail Recipe</h3>

                  <div className="postTile__metaWrapper">
                    {/* Author Avator */}
                    <div className="postTile__authorWrapper"><img src={AuthorImgExample} alt="Img of the post creator" />
                    {/* Author Name */}
                    <p>Leona Davis</p></div>
                    {/* Favorite */}
                    <p><span><FaHeart />609</span>
                    {/* View Counter */}
                    <span><FaEye />120</span></p>
                  </div>
                </li>

                <li className="postTile">
                  {/* Post Img */}
                  <img src={PostCoverExample} alt="Img of a drink" className="postTile__postCover"/>
                  {/* Post Title */}
                  <h3>Seriously Good White Russian Cocktail Recipe</h3>

                  <div className="postTile__metaWrapper">
                    {/* Author Avator */}
                    <div className="postTile__authorWrapper"><img src={AuthorImgExample} alt="Img of the post creator" />
                    {/* Author Name */}
                    <p>Leona Davis</p></div>
                    {/* Favorite */}
                    <p><span><FaHeart />609</span>
                    {/* View Counter */}
                    <span><FaEye />120</span></p>
                  </div>
                </li>

                <li className="postTile">
                  {/* Post Img */}
                  <img src={PostCoverExample} alt="Img of a drink" className="postTile__postCover"/>
                  {/* Post Title */}
                  <h3>Seriously Good White Russian Cocktail Recipe</h3>

                  <div className="postTile__metaWrapper">
                    {/* Author Avator */}
                    <div className="postTile__authorWrapper"><img src={AuthorImgExample} alt="Img of the post creator" />
                    {/* Author Name */}
                    <p>Leona Davis</p></div>
                    {/* Favorite */}
                    <p><span><FaHeart />609</span>
                    {/* View Counter */}
                    <span><FaEye />120</span></p>
                  </div>
                </li>
              </ul>

            <button>LOAD MORE</button>

          </div>
        </div>
      </main>

      <CallToAction />
      </>
    )
  }
}

export default Category;
