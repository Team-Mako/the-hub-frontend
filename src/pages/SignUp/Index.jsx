import React from 'react';
import PageHeader from './PageHeader';

const SignUp = () => (
  <main className="sign-up">
    <PageHeader />
    <div className="sign-up__inner">
      <h1>Sign up to The HUB</h1>

      <form>
        <span className="sign-up__name">
          <div>
            <label>First Name</label>
            <input id="name" name="name" type="text" placeholder="Type your first name" />
          </div>

          <div>
            <label>Last Name</label>
            <input name="lastName" type="text" placeholder="Type your last name" />
          </div>
        </span>

        <span>
          <label>Email Address</label>
          <input type="email" name="email" placeholder="johndoe@email.com" />
        </span>

        <span>
          <label>Password</label>
          <input type="password" name="password" placeholder="8+ Character" min="8" />
        </span>

        <span>
          <label>Confirm Password</label>
          <input type="password" name="password2" placeholder="8+ Character" min="8" />
        </span>

        <span className="sign-up__checkbox">
          <input type="checkbox" name="policy" />
          <p>Creating an account means you are okay with our <a href="# ">Terms of Service</a>, <a href="# ">Privacy Policy</a>.</p>
        </span>

        <a type="submit" className="sign-up__create-btn" href="# ">CREATE ACCOUNT</a>
      </form>
    </div>
  </main>
);

export default SignUp;
