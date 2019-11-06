import React from 'react'
import './App.css'

const BookCard = (props) =>{
 
    return(
<div className="card-contrainer">
<div className="p-3">
<<<<<<< HEAD
<br/>
   <img src={props.image} alt=""/>
   <br/>
   <br/>
   <h4>{props.title}</h4>
=======

   <img src={props.image} alt=""/>
   <br/>
   <br/>
   <h5>{props.title}</h5>
>>>>>>> 44278d9b7de0335ad0ee1fc3a9460aa644e32c61
   <br/>
   <h6 className="h"><b>Category:</b> {props.desc}</h6>
   <h6 className="h"><b>Author:</b> {props.author}</h6>
   <h6 className="h"><b>Published:</b> {props.published}</h6>
   <br/>
   <section className="box"> <button className="download"><a href= {props.link}>Open a book </a></button>
   <button className="download"><a href= {props.download}>Downlod it </a></button>
   </section> 
 
</div>
</div>
         )
}
export default BookCard;