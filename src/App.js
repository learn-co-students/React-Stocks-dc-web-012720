import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
const URL = 'http://localhost:3000/stocks'

class App extends Component {

  constructor(){
    super();
    this.state = {
      stocks: [],
      portfolio: []
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(resp => resp.json())
    .then(stock => this.setState({
      stocks: stock
    }))
  }

  purchaseStock = (stock) => {
    this.state.portfolio.includes(stock) ? null : this.setState({portfolio: [...this.state.portfolio, stock]})
  }

  removeStock = (stock) => {
    this.setState({
      portfolio: this.state.portfolio.filter(port => port !== stock)
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer portfolio={this.state.portfolio} stocks={this.state.stocks} purchaseStock={this.purchaseStock} removeStock={this.removeStock}/>
      </div>
    );
  }
}

export default App;
