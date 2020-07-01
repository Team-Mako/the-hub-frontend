import React, { Component } from 'react';
import { FaHeart, FaEye, FaChevronDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import api from '../../services/api';

class PostSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('list-post?_page=1&_limit=9');
    this.setState({ posts: response.data });
  }

  render() {
    const { posts } = this.state;

    return (
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

          <div className="post-section__list">
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

        <button
          type="button"
        >LOAD MORE
        </button>

      </section>
    );
  }
}

export default PostSection;
