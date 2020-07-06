import React, { Component } from 'react';
import axios from 'axios';
import { FaHeart, FaEye, FaChevronDown } from 'react-icons/fa';
import Dropdown from 'react-dropdown';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      topic: '',
      message: '',
    };
  }

  render() {
    return (
      <div className="out-contactForm">
        <p>We'd Love To Hear From You.</p>
        <form id="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" className="form-control" id="name" value={this.state.name} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} />
          </div>
          <div className="form-group">
            <label htmlFor="topic">Choose a Topic</label>
            <Dropdown options={['one', 'two', 'three', 'four']} onChange={this._onSelect} placeholder={<div className="optionTopic"><span>Select</span>  <FaChevronDown /></div>} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" id="message" value={this.state.message} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
