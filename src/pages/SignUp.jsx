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
    Axios.get('http://localhost:3333/list-post')
      .then((res) =>{
        this.setState({
          title: res.data[0].post_title
        })

        console.log(res)
      })
      .catch((err) =>
        console.log(err)
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
