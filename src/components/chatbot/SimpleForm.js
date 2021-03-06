import React, {Component} from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Post from './Post';

const config ={
  width: "400px",
  height: "500px",
}


const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor:  '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}


class SimpleForm extends Component{
  render(){
    return(
      <ThemeProvider theme={theme}>
        <ChatBot
          steps = {[
            {
              id: 'intro',
              message: 'Do you agree to suck struddle before you sit on it? Do you agree that you will participate to pie contest?',
              trigger: 'intro-user',
            },
            {
              id: 'intro-user',
              options:[
                {value:'y0', label:'yes', trigger:'yes-response'},
                {value: 'n0', label:'No', trigger:'no-response'},
              ]
            },
            {
              id: 'yes-response',
              message:'Great, the gr8t one will show you the path to blue hell!',
              trigger: 'q-name',
            },
            {
              id: 'no-response',
              message: 'Sorry to hear that. You can go ahead and have a kong pow chicken.',
              end: true,
            },
            {
              id:'q-name',
              message:'What is your name, Little Jabroni?',
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
              message: 'You put your email adress so that you can receive extra shiny boots',
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
              message: 'Give the zip(5digs) so that you get to experience the real bottom.',
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
              message: "Finally, your phone number is required to initiate rebecca xxx?",
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
              trigger: 'q-submit',
            },
            {
              id: 'q-submit',
              message: 'Do you wish to submit?',
              trigger: 'submit'
            },
            {
              id: 'submit',
              options:[
                {value: 'y', label:'Yes', trigger:'end-message'},
                {value: 'n', label: 'no', trigger: 'no-submit'},
              ]
            },
            {
              id: 'no-submit',
              message: 'It dooes matter if u submit or not!',
              end: true,
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true
            }
          ]}
          {...config}
        />
      </ThemeProvider>
    );
  }

}
export default SimpleForm;
