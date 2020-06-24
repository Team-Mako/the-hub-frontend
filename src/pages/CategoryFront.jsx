import React, { Component } from 'react';
import Axios from 'axios';
// import { Route } from 'react-router-dom';

import PostTileContainer from '../components/PostTileContainer';
import CallToAction from '../components/CallToAction';
import HeroImage from '../assets/static/the-hub-category-hero-image.jpg';


class Category extends Component{
  constructor(){
    super()
    this.state={
      posts:[],
      loading: false
    }
  }


  // Listing posts
  componentDidMount(){
    Axios.get('http://localhost:3333/list-post')
    .then( response => {
      console.log(response)
      this.setState({
        posts: response.data,
        loading: false
      })
    })
    .catch( error => {
      console.log('Error fetching and parsing data', error)
    })
  }


  render(){
    return(
      <>
      <main className="category-front">

        <div className="category-front__inner">
          {/* HERO */}
          <div className='category-front__hero'>

            <div className='category-front__left'>
              <h1>Have fun creating delicious drinks</h1>
              <p>Fresh and fruity, with or without alcohol, it’s your choice. Find the best recipes to try it your self.</p>
            </div>

            <div className='category-front__right'>
              <img src={ HeroImage } alt="A Hero Image of a Purple Cocktail"/>
            </div>

          </div>

          {/*  SEARCH FILTER */}
          <div className='category-front__filter'>
            <form>
              <label>
                Made with

              </label>
              <label>
                Time to make it

              </label>
              <label>
                Type

              </label>

              <button>FILTER</button>
            </form>
          </div>

          {/* RESULTS */}
          <div>
              (this.state.loading)
              ?<p>Loading...</p>
              :<PostTileContainer data={this.state.posts} />

              <div className="postTileContainer">
                <ul>
                  <li>
                    {/* Post Img */}
                    <div>
                      {/* Author Avator */}
                      <img src={ExampleThumbN} alt=""/>
                      {/* Post Title */}
                      <h3>{props.title}</h3>
                      {/* Author Img */}

                      {/* Author Name */}
                      <p>Leona Davis</p>

                      {/* Favorite */}
                      <FaHeart />
                      0
                      {/* View Counter */}
                      <FaEye />
                      {props.views}
                    </div>
                  </li>
                </ul>

                <button>LOAD MORE</button>
              </div>
          </div>

            </div>
          </main>

          <CallToAction />
          </>
        )
    }

}

  export default Category;
