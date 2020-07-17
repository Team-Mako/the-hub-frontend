import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart, FaEye, FaStar } from 'react-icons/fa';
import CallToAction from '../../components/CallToAction';
import Comments from './Comments';
import api from '../../services/api';
import { filesURL } from '../../config/filesBucket';

const SinglePost = () => {
  const [post, setPost] = useState('');
  const [materials, setMaterials] = useState([]);
  const [steps, setSteps] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    async function getPost() {
      const postData = await api.get(`/show-post/${slug}`);
      setPost(postData.data[0]);

      const materialData = await api.get(`/post-material/${postData.data[0].post_id}`);
      setMaterials(materialData.data);

      const stepData = await api.get(`/post-step/${postData.data[0].post_id}`);
      setSteps(stepData.data);
    }

    getPost();
  }, [slug]);

  return (
    <>
      <div className="single-post">
        <main>

          <div className="single-post__inner">
            <span className="single-post__title">
              <h1>{post.post_title}</h1>
              <FaStar />
            </span>

            <div className="single-post__details">
              <div className="single-post__author">
                <img src={post.user_avatar ? `${filesURL}${post.user_avatar}` : require('../../assets/static/the-hub-no-pic.svg')} alt="Post Author" />
                <p>{post.user_name}</p>
              </div>

              <div className="single-post__meta">
                <span><FaHeart /> 609</span>
                <span><FaEye /> 120</span>
              </div>
            </div>

            <img src={post.post_cover ? `${filesURL}${post.post_cover}` : ''} alt="Post Cover" className="single-post__cover" />

            <p className="single-post__description">{post.post_description}</p>

            <div className="single-post__ingredients">
              <div className="single-post__ingredients-inner">

                <span>You are going to need</span>

                <ul>
                  {materials.map((material) => (
                    <li key={material.material_id}>{material.material_name} {material.post_material_meas}</li>
                  ))}
                </ul>

              </div>
            </div>

            <div className="single-post__steps">

              <h2>How to do it yourself</h2>

              <ul>
                {steps.map((step, index) => (
                  <li key={step.post_step_id}>
                    <span>Step {index + 1}</span>

                    <p>{step.post_step_description}</p>

                    <img src={step.post_step_cover ? `${filesURL}${step.post_step_cover}` : ''} alt="Step Cover" />
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </main>

        <Comments />
      </div>

      <CallToAction />
    </>
  );
};

export default SinglePost;
