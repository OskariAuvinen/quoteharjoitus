import React, { Component } from 'react';
import '../App.css';
import '../style/quotes.css';

class QuoteForm extends Component {
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
        quote.push(this.state.author, this.state.author)
        console.log(quote);
        return quote;
    }
    render(){
        return( <form>
            <input type="text" placeholder="author" value={this.state.author} onChange={this.authorChange} />
            <input type="text" placeholder="quotetext" value={this.state.quotetext} onChange={this.quotetextChange} />
            <input type="submit" value="Tallenna" onClick={this.buttonClick} />
        </form>)

    }
    }
    var quote =[];
export default QuoteForm;