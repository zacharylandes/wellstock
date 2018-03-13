import React, { Component } from 'react';
import './App.css';
import '../Form/Form';
import '../Search/Search';
import '../StockContainer/StockContainer';
import {StockContainer} from '../StockContainer/StockContainer'
import { fetchStock, fetchStocks, SearchStocks } from '../../helper'
import { Form } from '../Form/Form'
import { Search } from '../Search/Search'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stocks: []
    }
  }

  componentDidMount = async ()=>{
    const stocks = await SearchStocks();
    this.setState({stocks: stocks})
  }


  handleSubmit = (stock) => {
    const stocks = [ ...this.state.stocks, stock ]
    // dont forget to change backend
    this.setState({ stocks })
    console.log('stocks', stocks)
  }

  handleSearch = async (params) => {
    const stocks = await SearchStocks(params)
    this.setState({ stocks })
    debugger;

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Well Stocked</h1>
        </header>
        <Search handleSearch={this.handleSearch} />
        <Form handleSubmit={this.handleSubmit} />
        <StockContainer stocks={this.state.stocks} />
      </div>
    );
  }
}

export default App;
