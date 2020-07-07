import React from 'react';
import { NavLink } from 'react-router-dom';
import PageHeader from './PageHeader';

const LogIn = () => (
  <main className="sign-up">
    <PageHeader />
    <div className="sign-up__inner">
      <h1>Login to The HUB</h1>
      <form className="forms__login">
        <label>
          <p>Email</p>
          <input type="email" placeholder="johndoe@email.com" />
        </label>

        <label>
          <p>Password</p>
          <NavLink to="/">Forgot password?</NavLink>
          <input type="password" name="password" placeholder="8+ Character" min="8" />
        </label>

        <button type="submit">LOG IN</button>
      </form>
    </div>
  </main>
);

export default LogIn;
