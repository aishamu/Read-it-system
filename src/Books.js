import React, { Component } from 'react';
import SearchArea from './SearchArea';
import request from 'superagent';
import BookList from './BookList';
  
export default class Books extends Component {
 
constructor(props){
super(props);
this.state={

    books: [],
    searchfield:''
  }
 }

 searchBook=(e) => {
  e.preventDefault();
    request
    .get('https://www.googleapis.com/books/v1/volumes')
    .query({ q: this.state.searchfield })
    .then((data)=> {
         console.log(data);
         this.setState({books: [...data.body.items]})
    })
 }
 
 handlesearch=(e)=>{
 this.setState({searchfield: e.target.value})
 }
    render() {
    return (
      <div>
       <SearchArea searchBook={this.searchBook} handlesearch={this.handlesearch} />
       <BookList books={this.state.books}/>
     </div>
    );
  }
}
