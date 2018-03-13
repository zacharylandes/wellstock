import React, { Component } from 'react';

 export class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state= {
      date: '',
      high: '',
      low: '',
      open: '',
      close: '',
      volume: '',
    }
  }

  handleFormInput = (e) => { // es6 and the best way to bind it right when it is defined
    // const value = e.target.value 
    const { value, name } = e.target; 

    this.setState({ [name]: value })
  } // this is calling the 'bound' reference to the function on the class

  submitStock = (e) => {
    e.preventDefault(); // so that app doesn't have to deal with handling this
    const newStock = Object.assign({},this.state)

    // const spreadIdea = {...this.state, id: Date.now()} // this is ES7
    this.props.handleSubmit(newStock);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitStock}>
          <input
            name='date' 
            type='date' 
            placeholder='Date'
            value={this.state.date}
            onChange={this.handleFormInput} 
          />
          <input
            name='high' 
            type='number' 
            placeholder='High' 
            value={this.state.high}
            onChange={this.handleFormInput} 
          />
          <input
            name='low' 
            type='number' 
            placeholder='Low' 
            value={this.state.low}
            onChange={this.handleFormInput} 
          />
                    <input
            name='open' 
            type='number' 
            placeholder='Open' 
            value={this.state.open}
            onChange={this.handleFormInput} 
          />
                    <input
            name='close' 
            type='number' 
            placeholder='Close' 
            value={this.state.close}
            onChange={this.handleFormInput} 
          />
                    <input
            name='volume' 
            type='number' 
            placeholder='Volume' 
            value={this.state.volume}
            onChange={this.handleFormInput} 
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

