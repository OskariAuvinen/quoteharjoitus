import React, { Component } from 'react';
import '../App.css';
import '../style/quotes.css';

class Quote extends Component {
  
  render() {
    return (
      <ul className="quote">
        <li className="quotetext">{this.props.children}</li>
        {/* comment */}
        <li className="quoteauthor">{this.props.author}</li>
      </ul>
    );
  }
}

export default Quote;
