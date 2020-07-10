import React from 'react';
import { NavLink } from 'react-router-dom';
import { NoPic } from '../../components/Assets';

const Dashboard = ({ children }) => (
  <main className="dashboard">
    <div className="dashboard__inner">
      <section className="dashboard__profile">
        <img src={NoPic} alt="User profile avatar" />
        <p>Jane</p>
        <p>email@email.ca</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, consequatur!</p>
        <NavLink to="/">Edit Profile</NavLink>
      </section>

      <section className="dashboard__panel">
        <nav className="dashboard__nav">
          <NavLink to="/my-projects">My Projects</NavLink>
          <NavLink to="/create-project">New Project</NavLink>
          <NavLink to="/favourites">Favourites</NavLink>
          <NavLink to="/insights">Insights</NavLink>
        </nav>
        {children}
      </section>
    </div>
  </main>
);

export default Dashboard;
