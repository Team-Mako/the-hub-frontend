import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { filesURL } from '../../../config/filesBucket';
import { NoPic } from '../../../components/Assets';

const MyProjects = ({ user }) => {
  useEffect(() => {
    function getUser() {
      console.log('Test');
    }

    getUser();
  });

  return (
    <main className="dashboard">
      <div className="dashboard__inner">
        <section className="dashboard__profile">
          <img src={user.user_avatar ? `${filesURL}${user.user_avatar}` : NoPic} alt="User profile avatar" />
          <p>{user.user_name}</p>
          <p>{user.user_email}</p>
        </section>

        <section className="dashboard__panel--alt">
          <h1 className="forms__profile-title">Account Information</h1>
          <form className="forms__profile">
            <label>
              <p>Name</p>
              <input type="text" />
            </label>

            <label>
              <p>Last Name</p>
              <input type="text" />
            </label>

            <label>
              <p>Email Address</p>
              <input type="email" />
            </label>

            <label>
              <p>Bio</p>
              <textarea />
            </label>

            <button type="submit">Save</button>
          </form>

          <h1 className="forms__profile-title">Password</h1>
          <form className="forms__profile">
            <label>
              <p>Old Password</p>
              <input type="password" />
            </label>

            <label>
              <p>New Password</p>
              <input type="password" />
            </label>

            <label>
              <p>Confirm Password</p>
              <input type="password" />
            </label>

            <button type="submit">Change</button>
          </form>

        </section>

      </div>
    </main>
  );
};

export default connect((state) => ({
  user: state.user,
}))(MyProjects);
