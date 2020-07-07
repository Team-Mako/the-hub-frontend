import React, { Component } from 'react';
import { FaHeart, FaEye } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import MediaQuery from 'react-responsive';
import api from '../../services/api';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class PostSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/list-post?pg=1&limit=3');
    this.setState({ posts: response.data });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="post-section">

        <div className="post-section__inner">

          <h2 className="home-main__title">Best of The HUB<br /> <span>This Week</span></h2>

          <MediaQuery maxDeviceWidth={420}>
            <div className="post-section__slider">
              <Carousel showThumbs={false} showIndicators={false} showStatus={false} infiniteLoop>
                { posts.map((post) => (

                  <NavLink key={post.post_id} to={`/DIY/${post.post_url}`} className="post-section__box">
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
              </Carousel>
            </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth={420}>
            <div className="post-section__list">
              { posts.map((post) => (
                <NavLink key={post.post_id} to={`/DIY/${post.post_url}`} className="post-section__box">
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
          </MediaQuery>

        </div>

      </section>
    );
  }
}

export default PostSection;
