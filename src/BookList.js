import React from 'react'
import './App.css'
import BookCard from './BookCard'
// import Bok from './Bok';
const BookList = (props) =>{

    return(
<div className="list">

   {
       props.books.map((book,i)=>{ 
         return   <BookCard 
           
           key={i}
           image={book.volumeInfo.imageLinks.thumbnail}
           title={book.volumeInfo.title}
           author={book.volumeInfo.authors}
           published={book.volumeInfo.publishedDate}
           link={book.accessInfo.webReaderLink}
           desc={book.volumeInfo.categories}
           download={book.accessInfo.pdf.acsTokenLink}
           
        />
 
       })
   }

</div>
    
    )
}
export default BookList;