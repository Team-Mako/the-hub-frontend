import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PageHeader from './PageHeader';
import Alerts from '../../components/Alerts';
import api from '../../services/api';

function LogIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const timer = () => {
    setTimeout(() => {
      setAlert(true);
    }, 5100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/create-session', {
      email,
      password,
    })
      .then((res) => {
        const { dispatch } = props;
        const { data } = res;

        dispatch({
          type: 'USER_LOGIN',
          payload: data,
        });

        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <main className="sign-up">
      <PageHeader />
      <div className="sign-up__inner">
        <h1>Login to The HUB</h1>
        <form className="forms__login" onSubmit={handleSubmit}>
          <label>
            <p>Email</p>
            <input type="email" placeholder="johndoe@email.com" value={email} onChange={handleEmail} required />
          </label>

          <label>
            <p>Password</p>
            <NavLink to="/">Forgot password?</NavLink>
            <input type="password" name="password" placeholder="8+ Character" min="8" value={password} onChange={handlePassword} required />
          </label>

          <button type="submit">Sign In</button>
        </form>
      </div>
      <Alerts active={alert} message={alertMessage} />
    </main>
  );
}

export default connect()(LogIn);
