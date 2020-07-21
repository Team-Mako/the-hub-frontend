import React, { useState, useEffect } from 'react';
import { FaHeart, FaEye } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import api from '../../services/api';
import { filesURL } from '../../config/filesBucket';
import { NoPic } from '../../components/Assets';

const PostSection = () => {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(9);

  useEffect(() => {
    async function getPosts() {
      const response = await api.get(`/list-post?pg=1&limit=${page}`);
      setPosts(response.data);
    }

    async function getTotal() {
      const response = await api.get('/count-post');
      setTotal(response.data[0].total);
    }

    getTotal();
    getPosts();
  }, []);

  useEffect(() => {
    async function getNewPosts() {
      const response = await api.get(`/list-post?pg=1&limit=${page}`);
      setPosts(response.data);
    }

    getNewPosts();
  }, [page])

  const handleMorePosts = () => {
    setPage(page + 6);
  }

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
              <img className="post-section__cover" src={`${filesURL}${post.post_cover}`} alt={post.post_title} />
              <h3>{post.post_title}</h3>

              <div className="post-section__details">

                <div className="post-section__author">

                  <img src={post.user_avatar ? `${filesURL}${post.user_avatar}` : NoPic} alt={post.user_name} />

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

      {total > page ? <button type="button" onClick={handleMorePosts}>Load More</button> : ''}

    </section>
  );
};

export default PostSection;
