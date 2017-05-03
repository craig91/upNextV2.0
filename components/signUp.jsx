import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

const CreateUser = React.createClass({
  getInitialState(){
    return {
      user: null
    }
  },
  handleSubmit(event) {
    event.preventDefault();
    $.ajax({
      url: 'api/user/register',
      type: 'POST',
      data: {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        bio: this.bio.value,
        email: this.email.value,
        linkedin: this.linkedin.value,
        imageUrl: this.imageUrl.value,
        password: this.password.value,
        location: this.location.value,
        position: this.position.value
      }
    })
    .done((data) => {
      console.log(data)
      this.setState({user: data})
      // this.props.router.push('/profile' + data.id + '?login' + data.id)
    }).catch((error) => {
      console.log(error)
    })
  },
  render: function() {
    return (
    <div>

        <div>
            <div>
              <form onSubmit={this.handleSubmit}>

                   <span>First Name</span>
                   <input type="text" ref={(input) => {
                       this.firstName = input;
                   }} required/>
                   <span>Last Name</span>
                   <input type="text" ref={(input) => {
                       this.lastName = input;
                   }} required/>
                   <span>Bio</span>
                   <input type="text" ref={(input) => {
                       this.bio = input;
                   }} required/>
                   <span>Your email</span>
                   <input type="text" ref={(input) => {
                       this.email = input;
                   }} required/>
                   <span>Location</span>
                   <input type="text" ref={(input) => {
                       this.location = input;
                   }} required/>
                   <span>Postition</span>
                   <input type="text" ref={(input) => {
                       this.position = input;
                   }} required/>
                   <span>LinkedIn</span>
                   <input type="text" required ref={(input) => {
                       this.linkedin = input;
                   }} required/>
                   <span>Image url</span>
                   <input type="text" required ref={(input) => {
                       this.imageUrl = input;
                   }} required/>
                   <span>Password</span>
                   <input type="password" required ref={(input) => {
                       this.password = input;
                   }} required/>
                    <button type="submit">Sign Up</button>
                   </form>
               </div>
           </div>
       </div>
    )
  }
})

export default CreateUser
