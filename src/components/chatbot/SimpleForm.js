import React, {Component} from 'react';
import ChatBot from 'react-simple-chatbot';


class SimpleForm extends Component{
  render(){
    return(
      <ChatBot
        steps = {[
          {
            id: 'intro',
            message: 'Do you agree to Terms and Condition?',
            trigger: 'intro-user',
          },
          {
            id: 'intro-user',
            options:[
              {value:'y', label:'yes', trigger:'yes-response'},
              {value: 'n', label:'No', trigger:'no-response'},
            ]
          },
          {
            id: 'yes-response',
            message:'Great!',
            trigger: 'q-name',
          },
          {
            id: 'no-response',
            message: 'Sorry to hear that.',
            end: true,
          },
          {
            id:'q-name',
            message:'What is your name?',
            trigger:'name',
          },
          {
            id:'name',
            user:true,
            validator:(value) =>{
              if(/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
              {
                return true;
              }
              else
              {
                return "Please input alphabet characters only.";
              }
            },
            trigger: 'q-email',
          },
          {
            id: "q-email",
            message: 'What is your email?',
            trigger:"email",
          },
          {
            id: 'email',
            user: true,
            validator:(value) =>{
              if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
              {
                return true;
              }
              else {
                return 'Please enter a valid email.';
              }
            },
            trigger:'q-zip',
          },
          {
            id: 'q-zip',
            message: 'What is your zip code?',
            trigger: 'zip',

          },
          {
            id: 'zip',
            user: true,
            validator: (value) => {
              if (/^[0-9]{5}(?:-[0-9]{4})?$/.test(value))
              {
                return true;
              }
              else
              {
                return "Please enter a valid zip code."
              }
            },
            trigger: 'q-phone'
          },
          {
            id: 'q-phone',
            message: "What is your phone number?",
            trigger: 'phone',
          },
          {
            id: 'phone',
            user:true,
            validator: (value) =>{
              if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value))
              {
                return true;
              }
              else {
                return "Please enter a valid phone number.";
              }
            },
            end:true,
          },
        ]}
      />
    );
  }

}
export default SimpleForm;
