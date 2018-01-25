import React, {Component} from 'react';
import axios from 'axios';

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
    let formInput = this.state.formInput;
    const url = `${BASEURL}/sortinator`;

    axios.post(url, {formInput})
      .then(response => {
        console.log("The response is ", response);
      });

    this.setState({
      formInput: ''
    });

  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Input a Word to Sort</label>
        <input value={this.state.formInput} onChange={this.handleForm} type="text" />
        <button>Submit</button>
      </form>
    )
  }
}


export default Form;