import React, {Component} from 'react';
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

    fetch(`${BASEURL}/sortinator`, {
      method: 'post',
      body: JSON.stringify({ formInput })
    });

  }

  render(){
    return(
      <form onSubmit={this.handleForm}>
        <label>Input a Word to Sort</label>
        <input type="text" />
        <button>Submit</button>
      </form>
    )
  }
}


export default Form;