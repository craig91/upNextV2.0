import React from 'react';
import $ from 'jquery';

const LoginPage = React.createClass({
  getInitialState() {
    return { user: null }
  },
  handleSubmit(event) {
    event.preventDefault();
    {
      $.ajax({
        url: '/api/user/login',
        type: 'POST',
        data: {
          email: this.email.value,
          password: this.password.value
        }
      }).done((data) => {
        this.setState({ user: data })
        console.log(data)
      }).catch((error) => {
        console.log(error)
      })
    }
    console.log(this.email.value)
  },
  render: function() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>

          <span>email</span>
          <input type="text" placeholder="enter your email" ref={(input) => {
            this.email = input;
          }} required/>

          <span>Password</span>
          <input type="password" ref={(input) => {
            this.password = input;
          }} required/>

          <input type="submit" />

        </form>
      </div>
    )
  }
})

export default LoginPage;
