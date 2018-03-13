import React, { Component } from 'react';

 export class Search extends Component {
  constructor(props) {
    super(props);

    this.state= {
      input: ''
    }
  }

  handleFormInput = (e) => {
    const { value, name } = e.target; 

    this.setState({ [name]: value })
  } 

  submitStock = (e) => {
    e.preventDefault();
    const Stock = Object.assign({},this.state)
    this.props.handleSearch(Stock);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitStock}>
          <input
            name='input' 
            type='text' 
            value={this.state.input}
            onChange={this.handleFormInput} 
          />
          <input type='submit' />          
        </form>
      </div>
    )
  }
}
