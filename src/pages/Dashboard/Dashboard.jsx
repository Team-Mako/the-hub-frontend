import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NoPic } from '../../components/Assets';
import { filesURL } from '../../config/filesBucket';
import api from '../../services/api';

const Dashboard = ({ children }) => {
  const userData = useSelector((state) => state.user);

  const [bio, setBio] = useState('');

  useEffect(() => {
    async function getBio() {
      const getLocalStorage = JSON.parse(localStorage.getItem('persist:thehub'));
      const userObj = JSON.parse(getLocalStorage.user);
      const result = await api.get(`/show-user/${userObj.user_id}`);
      setBio(result.data[0].user_bio);
    }

    getBio();
  }, []);

  return (
    <main className="dashboard">
      <div className="dashboard__inner">
        <section className="dashboard__profile">
          <figure className="avatar">
            <div className="avatar__img" style={{ background: `url(${userData.user_avatar ? filesURL + userData.user_avatar : NoPic})` }} />
          </figure>
          <p>{userData.user_name}</p>
          <p>{userData.user_email}</p>
          <p>{bio || 'Tell us somenthing about you!'}</p>
          <NavLink to="/edit-profile">Edit Profile</NavLink>
        </section>

        <section className="dashboard__panel">
          <nav className="dashboard__nav">
            <NavLink to="/my-projects">My Projects</NavLink>
            <NavLink to="/favourites">Favourites</NavLink>
            <NavLink to="/insights">Insights</NavLink>
          </nav>
          {children}
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
