import React, { useState } from 'react';

const Contact = () => {
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

  return (
    <form className="contact-form">
      <h2>We'd Love To Hear From You</h2>
      <div className="form-group">
        <label>
          <p>Full Name</p>
          <input type="text" className="form-control" placeholder="e.g. Jane Doe" value={name} onChange={handleName} />
        </label>
      </div>
      <div className="form-group">
        <label>
          <p>Email</p>
          <input type="email" className="form-control" placeholder="e.g. janedoe@gmail.com" value={email} onChange={handleEmail} />
        </label>
      </div>
      <div className="form-group">
        <label>
          <p>Subject</p>
          <input type="email" className="form-control" placeholder="e.g. Size of images" value={email} onChange={handleEmail} />
        </label>
      </div>
      <div className="form-group">
        <label>
          <p>Message</p>
          <textarea className="form-control" rows="5" placeholder="e.g. Write your message here. We will be happy to receive your message!" value={message} onChange={handleMessage} />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Contact;
