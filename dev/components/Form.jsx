import React, {Component} from 'react';
import axios from 'axios';
import {escapeHtml} from './utils.js';
import {Row, Input} from 'react-materialize';

const BASEURL = 'http://localhost:4000/api';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      formInput: 'Please enter a word to sort.'
    }
    this.handleForm = this.handleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleForm(event){
    let formInput = event.target.value;

    this.setState({
      formInput
    });

  }

  handleSubmit(event){
    event.preventDefault();

    const updateAppState = this.props.callback;
    
    //sanitize form input
    let formInput =  escapeHtml(this.state.formInput);
    
    const url = `${BASEURL}/sortinator`;

    axios.post(url, {formInput})
      .then(response => {
        console.log("The response is ", response);

        updateAppState(response.data);
      })
      .catch(error => {
        console.log("The error is ", error);
      })

    this.setState({
      formInput: ''
    });

  }

  render(){
    return(
    <form style={{marginTop: '3em'}} onSubmit={this.handleSubmit}>
      <Row>
        <h4>Input a Word to Sort</h4>
        <Input value={this.state.formInput} onChange={this.handleForm} type="text" s={6} />
      </Row>
    </form>
    )
  }
}


export default Form;


