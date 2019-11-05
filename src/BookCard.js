import React from 'react'
import './App.css'
 
// import { Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
// import { Card } from 'react-bootstrap'
// import Row from 'react-bootstrap/Row'
const BookCard = (props) =>{
 
    return(
<div className="card-contrainer">
<div className="p-3">

<img src={props.image} alt=""/>
<br/>
<br/>
  <h4>{props.title}</h4>
  <h6>{props.desc}</h6>
  <h6>{props.author}</h6>
  <h6>{props.published}</h6>
  
   <section className="box"> <button className="download"><a href= {props.link}>Open a book </a></button>
   <button className="download"><a href= {props.download}>Downlod it </a></button>
   </section> 
 
</div>
 

</div>
         )


}
export default BookCard;