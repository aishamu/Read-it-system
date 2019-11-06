import React from 'react'
import{Route,BrowserRouter,Switch} from 'react-router-dom'
import Abouts from './Abouts'
import Books from './Books'
import Contact from './Contact'
import Home from './Home'
import './App.css'
import {Navbar ,Nav} from 'react-bootstrap'

const Header = () =>{
 
    return(

 <div>
 
   <BrowserRouter>
   <header className="page-header">
  <div className="container">
   <Navbar variant="dark">
 
   <Navbar.Brand>   <img src="https://www.pngtube.com/myfile/full/5-59887_books-icon-png-books-icon-png-free.png" width="100" alt="" /><h1>Read It</h1></Navbar.Brand>
   <Nav className="Navbar">
   <Nav.Link href="/" > Home</Nav.Link>
   <Nav.Link href="/Books" > Books</Nav.Link>
   <Nav.Link href="/Abouts" > About</Nav.Link>
   <Nav.Link href="/contactus" > contactus</Nav.Link>
   </Nav>
   </Navbar>
   
  
   </div>
   </header>
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route path="/Abouts" component={Abouts}/>
   <Route path="/Books" component={Books}/>
   <Route path="/contactus" component={Contact}/>
  
   </Switch>

   
   
   </BrowserRouter>
   </div> 
    )


}
export default Header;