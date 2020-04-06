import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
           this.props.portfolio.map(port=> <Stock stock={port} key={port.id} removeStock={this.props.removeStock}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
