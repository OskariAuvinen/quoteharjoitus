import React, { Component } from 'react';
import QuoteList from './QuoteList';
import '../App.css';
import '../style/quotes.css';

class QuoteBox extends Component {
  state ={author:'', quotetext:''}

  authorChange = (e) => {this.setState({author: e.target.value});
  console.log(e.target.value);}

  quotetextChange = (e) => {this.setState({quotetext: e.target.value});
  console.log(e.target.value);}

  buttonClick = (e) => {
      e.preventDefault();
      alert(`${this.state.author} sanoi:" ${this.state.quotetext}"`);
      this.setState({author:'', quotetext:''});
      console.log(this.state.author, this.state.author);
      data.push({id: data.length +1,author: this.state.author, quotetext: this.state.quotetext})
      console.log(data);   
  }
  emptyAll = (e) => {
    e.preventDefault();
    alert(`KOKO LISTA TYHJENNETTY!`)
    this.setState(data=[]);
  }
  render(){
      return( 
        <div>
      <form>
          <input type="text" placeholder="author" value={this.state.author} onChange={this.authorChange} />
          <input type="text" placeholder="quotetext" value={this.state.quotetext} onChange={this.quotetextChange} />
          <input type="submit" value="Tallenna" onClick={this.buttonClick} />
          <input type="submit" value="Tyhjennä Lista" onClick={this.emptyAll} />
      </form>
  
      
        <h1>Quotes</h1>
        <p>Quotes: {data.length}</p>
        <QuoteList quotenodes={data}/>
        </div>);
  }
}

var data = [];


export default QuoteBox;
