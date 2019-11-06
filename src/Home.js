import React, { Component } from 'react'
import axios from 'axios'
  


export default class Home extends Component {
  state={
     data:[],
   }
 
 componentDidMount(){
 axios.get("https://api.quotable.io/random")
 .then((res)=>{
 this.setState({
   data:res.data
 })
 
 })
 
 }
    render() {
      
        return (
 <div className="container">
        <br/><br/>
   <div className="jumbotron">
         <h1 className = "large" >
  " {this.state.data.content} "
    </h1>
   <p>{this.state.data.author}</p>
   </div>
</div>
        )
    }
}
