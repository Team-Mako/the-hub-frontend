import React from 'react';

const LogIn = () => (
  <main className="log-in">
    <div className="log-in__innerDiv">
      <h1>Login to The HUB</h1>
      <form>
        <span>
          <label>Username or Email Address</label>
          <input type="email" name="email" placeholder="johndoe@email.com" />
        </span>

        <span>
          <div className="log-in__passwordLabel"><label>Password</label><a href="# ">Forgot password?</a></div>
          <input type="password" name="password" placeholder="8+ Character" min="8" />
        </span>

        <a type="submit" className="log-in__createBtn" href="# ">LOG IN</a>
      </form>
    </div>
  </main>
);

export default LogIn;
