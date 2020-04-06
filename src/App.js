import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
const URL = 'http://localhost:3000/stocks'

class App extends Component {

  constructor(){
    super();
    this.state = {
      stocks: [],
      portfolio: [],
      showStocks: []
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(resp => resp.json())
    .then(stock => this.setState({
      stocks: stock,
      showStocks: stock
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

  sortList = (value) => {
    let sortedArr = []
      if (value === "Alphabetically") {
        sortedArr = this.state.showStocks.sort((a,b) => a.ticker > b.ticker ? 1 : -1)
      } else if( value === "Price") {
        sortedArr = this.state.showStocks.sort((a,b) => a.price > b.price ? 1 : -1)
      }

      this.setState({
        showStocks: sortedArr
      })
  }

  filterList = (value) => {
    if(value !== "All"){
      this.setState({
        showStocks: this.state.stocks.filter(stock => stock.type === value)
      })
    } else {
      this.setState({
        showStocks: this.state.stocks
      })
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer 
        portfolio={this.state.portfolio} 
        stocks={this.state.showStocks} 
        purchaseStock={this.purchaseStock} 
        removeStock={this.removeStock}
        sortList={this.sortList}
        filterList={this.filterList}
        />
      </div>
    );
  }
}

export default App;
