import React, { Component } from 'react';
import { FaHeart, FaEye } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import api from '../../services/api';

class PostSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('list-post');
    this.setState({ posts: response.data });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="post-section">

        <div className="post-section__inner">

          <h2 className="home-main__title">Best of The HUB<br /> <span>This Week</span></h2>

          <div className="post-section__list">
            { posts.map((post) => (

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

      </section>
    );
  }
}

export default PostSection;
