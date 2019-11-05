import React, { Component } from 'react';
import SearchArea from './SearchArea';
import request from 'superagent';
import BookList from './BookList'
 
export default class Books extends Component {
 
 constructor(props){
super(props);
this.state={

    books: [],
    searchfield:'',
    sort:''
  }
 }

 searchBook=(e) => {
  e.preventDefault();
    request
    .get('https://www.googleapis.com/books/v1/volumes')
    .query({ q: this.state.searchfield })
    .then((data)=> {
         console.log(data);
         const cleanData=this.cleanData(data)
        this.setState({books: cleanData})
   
    })
 }
 
 handlesearch=(e)=>{
 this.setState({searchfield: e.target.value})
 }

 handlesort=(e)=>{
    // console.log(e.target.value);
     this.setState({sort: e.target.value })
 }
 cleanData=(data)=>{
     const cleanData = data.body.items.map((book)=>{
         if(book.volumeInfo.hasOwnProperty('publishedDate') == false) {

            book.volumeInfo['publishedDate'] = '0000';
         }
         else if(book.volumeInfo.hasOwnProperty('imageLinks') == false){
            book.volumeInfo['imageLinks'] = {thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png'};

         }
         return book;
   
    
        })
        return cleanData;
 }
    render() {
        const sortBooks=this.state.books.sort((a,b)=>{
            if(this.state.sort ==='Newest'){
             return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
            }
           else if(this.state.sort ==='Oldest'){
                return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
               }

        })
    return (
      <div>
  <SearchArea searchBook={this.searchBook} handlesearch={this.handlesearch} handlesort={this.handlesort}/>
 <BookList books={sortBooks}/>  
    
       </div>
    );
  }
}
