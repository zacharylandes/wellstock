import React, { Component } from 'react';
import './App.css';
import '../Form/Form';
import '../Search/Search';
import '../StockContainer/StockContainer';
import {StockContainer} from '../StockContainer/StockContainer'
import { searchStocks, createStock, putStock,login } from '../../helper'
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
    const stocks = await login();
    this.setState({stocks: stocks})
  }

  handleSubmit = (stock) => {
    const stocks = [ ...this.state.stocks, stock ]
    createStock(stock)
    // dont forget to change backend
    this.setState({ stocks })
    console.log('stocks', stocks)
  }

  handleSearch = async (params) => {
    const stocks = await searchStocks(params)
    this.setState({ stocks })
  }

  removeStock = (date) => {
    // this.state.ideas.filter(({id}) => id !== ideaId) // redeclare param to ideaId
    const stocks = this.state.stocks.filter(stock => stock.date !== date)
    this.setState({ stocks })
  }

  editStock = (stock) => {
    putStock(stock)
    // this.state.ideas.filter(({id}) => id !== ideaId) // redeclare param to ideaId
    // const stocks = this.state.stocks.filter(stock => stock.stock !== date)
    // this.setState({ stocks })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Well Stock</h1>
        </header>
          <a href ="http://localhost:3000/auth/google_oauth2">Sign in with Google</a>
        <Search handleSearch={this.handleSearch} />
        <Form handleSubmit={this.handleSubmit} />
        <StockContainer 
         stocks={this.state.stocks} 
         removeStock={this.removeStock}
         editStock={this.editStock}/>
      </div>
    );
  }
}

export default App;
