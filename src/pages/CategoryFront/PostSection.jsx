import React, { useState, useEffect } from 'react';
import { FaHeart, FaEye } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import api from '../../services/api';

const PostSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await api.get('/list-post');
      setPosts(response.data);
    }
    getPosts();
  }, []);

  return (
    <section className="post-section">

      <div className="post-section__inner">

        <form>
          <span className="post-section__label">
            Made with
          </span>
          <span className="post-section__label">
            Time to make it
          </span>
          <span className="post-section__label">
            Type
          </span>

          <button type="button">Filter</button>
        </form>

        <div className="post-section__list">
          {posts.map((post) => (
            <NavLink key={post.post_id} to="/" className="post-section__box">
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

      <button type="button">Load More</button>

    </section>
  );
};

export default PostSection;
