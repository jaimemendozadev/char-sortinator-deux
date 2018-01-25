import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import StringCollection from './components/StringCollection.jsx';
import Form from './components/Form.jsx';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sortedStrings: []
      
    }
    this.updateSortedStrings = this.updateSortedStrings.bind(this);
  }

  updateSortedStrings(data){
    let newState = [...this.state.sortedStrings, data];

    console.log("the newState is ", newState)

    this.setState({
      sortedStrings: newState
    })
  }

  render(){
    return (
      <div>
        <h1>Welcome to the Sortinator!</h1>
        <Form callback={this.updateSortedStrings} />
        <StringCollection sortedArr={this.state.sortedStrings} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));