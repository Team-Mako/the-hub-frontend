import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { NoPic } from '../../components/Assets';

const Dashboard = ({ children, user }) => (
  <main className="dashboard">
    <div className="dashboard__inner">
      <section className="dashboard__profile">
        <img src={NoPic} alt="User profile avatar" />
        <p>{user.user_name}</p>
        <p>{user.user_email}</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, consequatur!</p>
        <NavLink to="/">Edit Profile</NavLink>
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

export default connect((state) => ({
  user: state.user,
}))(Dashboard);
