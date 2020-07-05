import React from 'react';
import { NavLink } from 'react-router-dom';
import PageHeader from './PageHeader';

const LogIn = () => (
  <main className="sign-up">
    <PageHeader />
    <div className="sign-up__inner">
      <h1>Login to The HUB</h1>
      <form>
        <span>
          <label>Username or Email Address</label>
          <input type="email" name="email" placeholder="johndoe@email.com" />
        </span>

        <span>
          <div className="sign-up__password-label">
            <label>Password</label>
            <NavLink to="/">Forgot password?</NavLink>
          </div>
          <input type="password" name="password" placeholder="8+ Character" min="8" />
        </span>

        <a type="submit" className="sign-up__create-btn" href="# ">LOG IN</a>
      </form>
    </div>
  </main>
);

export default LogIn;
