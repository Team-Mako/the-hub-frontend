import React, { Component } from 'react';
import { FaHeart, FaEye, FaChevronDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import CallToAction from '../../components/CallToAction';
import { DrinkCover } from '../../components/Assets';
import api from '../../services/api';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postsNum: 9
    };
  }



  async componentDidMount() {
    const response = await api.get(`list-post?_page=1&_limit=${this.state.postsNum}`);
    this.setState({ posts: response.data });
    console.log(this.state)
  }


  handleMoreBtn = () => {
    this.setState(prevState =>{
      return {
        postsNum: prevState.postsNum += 3
      }
    });
  }


  render() {
    const { posts } = this.state;

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
              <span className="post-section__label">
                Made with
                <Dropdown options={['one', 'two', 'three', 'four']} onChange={this._onSelect} placeholder={<div className="optionWrapper"><span>Select</span>  <FaChevronDown /></div>} />
              </span>
              <span className="post-section__label">
                Time to make it
                <Dropdown options={['one', 'two', 'three', 'four']} onChange={this._onSelect} placeholder={<div className="optionWrapper"><span>Select</span>  <FaChevronDown /></div>} />
              </span>
              <span className="post-section__label">
                Type
                <Dropdown options={['one', 'two', 'three', 'four']} onChange={this._onSelect} placeholder={<div className="optionWrapper"><span>Select</span>  <FaChevronDown /></div>} />
              </span>

              <button type="button">Filter</button>
            </form>

            <div className="post-section__list" >
              {posts.map((post) => (
                <NavLink key={post.id} to="/" className="post-section__box">
                  <img className="post-section__cover" src={require(`../../assets/uploads/${post.post_cover}`)} alt="Img of a drink" />
                  <h3>{post.post_title}</h3>

                  <div className="post-section__details">

                    <div className="post-section__author">
                      <img src={require(`../../assets/uploads/${post.user_avatar}`)} alt="Img of the post creator" />
                      <p>{post.user_name}</p>
                    </div>

                    <div className="post-section__meta">
                      <span><FaHeart /> {post.post_like}</span>
                      <span><FaEye /> {post.post_views}</span>
                    </div>

                  </div>
                </NavLink>
              ))}
            </div>
          </div>

          <button type="button" onClick={this.handleMoreBtn}>LOAD MORE</button>

        </section>

        <CallToAction />
      </>
    );
  }
}

export default Category;
