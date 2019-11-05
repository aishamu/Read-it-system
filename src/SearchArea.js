import React from 'react'
 import './App.css'
const SearchArea = (props) =>{
 
return(
 <div className="col-lg-13-24 col-sm-12 order-3 order-lg-2">
         <br/>
     <form onSubmit={props.searchBook} action="">
         <div className="input-group w-100">
         <input onChange={props.handlesearch} type="text"className="form-control" placeholder="Search For..."/>
         <button className="btn btn-primary"   type="submit"> Search</button> 
         </div>

     </form>

 </div>     
 
    )


}
export default SearchArea;