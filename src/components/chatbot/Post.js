import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component{
  constructor(props){
    super(props);
    const{ steps } = this.props;
    console.log(steps);
    const{ submit, name, email,phone,zip } = steps;

    this.state = { submit, name, email, phone, zip};
  }
  componentDidMount(){
    const userObject = {
      submit: this.state.submit.value,
      name: this.state.name.value,
      phone: this.state.phone.value,
      email: this.state.email.value,
      zip: this.state.zip.value,
    };
    axios.post('/api', userObject)
    .then(res =>{
      console.log(res.status)
    }).catch(function(error){
      console.log(error);
    });
  }
  render(){
    return(
      <div> Good Job Oxmall, ure one step closer to blue hell</div>
    );
  }
};
export default Post;
