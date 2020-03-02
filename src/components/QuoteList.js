import React, { Component } from 'react';
import Quote from './Quote';
import '../App.css';
import '../style/quotes.css';


class QuoteList extends Component {
  render () {
    var quoteNodes = this.props.quotenodes.map(function(quote) {
        return (
          <Quote author={quote.author} key={quote.id}>
              {quote.quotetext}
          </Quote>
        );
    });
    return (
      <div className="quotelist">
          {quoteNodes}
      </div>
    );
  }
}

export default QuoteList;
