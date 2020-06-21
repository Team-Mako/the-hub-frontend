import React, { Component } from 'react';
import Axios from 'axios';

class SignUp extends Component {
  state = {
    name: null,
    lastName: null,
    email: null,
    password: null,
    password2: null,
    policy: false,
    title: null
  }

  submitHandler = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3333/create-user', this.state)
      .then((res) =>
        alert('Everything is ok! Welcome')
      )
      .catch((err) =>{
        alert('This email already have been taken, please chose another one!')
        console.log(err)
      }
      );
  }

  inputHandler = (e) => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <main className="sign-up">
        {this.state.title}
        <form method="POST" onSubmit={this.submitHandler}>
          <label>
            First Name
            <input name="name" type="text" placeholder="John" onChange={this.inputHandler} />
          </label>
          <label>
            Last Name
            <input name="lastName" type="text" placeholder="Doe" onChange={this.inputHandler} />
          </label>
          <label>
            E-mail
            <input type="email" name="email" placeholder="johndoe@email.com" onChange={this.inputHandler} />
          </label>
          <label>
            Password
            <input type="password" name="password" placeholder="8+ Character" min="8" onChange={this.inputHandler} />
          </label>
          <label>
            Confirm Password
            <input type="password" name="password2" placeholder="8+ Character" min="8" onChange={this.inputHandler} />
          </label>
          <label>
            <input type="checkbox" name="policy" checked={this.state.policy} onChange={this.inputHandler} />
            By creating an account you are agreeing to our privacy policies and terms of service.
          </label>
          <button type="submit">Create Account</button>
        </form>
      </main>
    );
  }
}

export default SignUp;
