import React, { Component } from 'react';
import { FaHeart, FaEye, FaChevronDown } from 'react-icons/fa';
import Dropdown from 'react-dropdown';
import PageHeader from './PageHeader';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  render() {
    return (
      <div className="outterContactForm">
        <PageHeader />
        <h2>We'd Love To Hear From You</h2>
        <form>
          <div className="form-group1">
            <label htmlFor="name">Full Name</label>
            <input type="text" className="form-control" id="name" value={this.state.name} />
          </div>
          <div className="form-group2">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} />
          </div>
          <div className="form-group3">
            <label htmlFor="topic">Choose a Topic</label>
            <Dropdown options={['Questions', 'Ideas', 'Help', 'Account']} onChange={this._onSelect} placeholder={<div className="optionTopic"><span>Select</span>  <FaChevronDown /></div>} />
          </div>
          <div className="form-group4">
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
