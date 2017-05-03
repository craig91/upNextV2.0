import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';


const UploadProject = React.createClass({
  getInitialState() {
    return {
      project: null
    }
  },
  handleSubmit(event) {
    $.ajax({
      url: "/api/projects/create",
      type: 'POST',
      data: {
        title: this.title.value,
        description: this.description.value,
        name: this.name.value,
        gitRepo: this.gitRepo.value,
        url: this.url.value,
        videoUrl: this.videoUrl.value,
        pictureurl: this.pictureUrl.value,
        userId: this.props.location.query['user']
      }
    })
    .done((data) => {
      this.props.router.push('/profile_page')
    }).catch((error)=> {
      console.log(error)
    })
    console.log(this.title.value)
  },
  render: function() {
    return(
      <div>
        <div className="add-project-wrapper">
          <div className="upnext-form">
            <form onSubmit={this.handleSubmit}>

                    <span>Insert Title of your Project here</span>
                    <input  id="f1"  type="text" ref={(input) => {
                        this.title = input;
                    }} required/>

                    <span>
                        Description
                    </span>
                    <textarea type="textarea" ref={(input) => {
                        this.description = input;
                    }} required/>

                    <span>
                        Name</span>
                    <input type="text" ref={(input) => {
                        this.name = input;
                    }} required/>

                    <span>Github repo</span>
                    <input type="text" ref={(input) => {
                        this.gitRepo = input;
                    }} required/>

                    <span>App URL</span>
                    <input type="url" ref={(input) => {
                        this.url = input;
                    }} required/>

                    <span>Video URL</span>
                    <input type="url" ref={(input) => {
                        this.videoUrl = input;
                    }} required/>
                    <span>Picture Url</span>
                    <input type="url" ref={(input) => {
                        this.pictureUrl = input;
                    }} required/>

                    <button type="submit">Post Project</button>
                </form>

            </div>
        </div>
     </div>
    )
  }
})

export default UploadProject;
