import React, { useState } from 'react';
import { connect } from 'react-redux';
import api from '../../services/api';

function Contact({ auth }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  api.get('/test');

  return (
    <div className="out-contactForm">
      <p>We'd Love To Hear From You.</p>
      <form id="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" className="form-control" value={name} onChange={handleName} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" value={email} onChange={handleEmail} />
        </div>
        <div className="form-group">
          <label htmlFor="topic">Choose a Topic</label>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" value={message} onChange={handleMessage} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default connect((state) => ({
  auth: state.auth,
}))(Contact);
