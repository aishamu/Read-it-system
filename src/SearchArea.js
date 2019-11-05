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
<center>
<select className="custom-select" defaultValue="sort" onChange={props.handlesort}> 
<option value="Sort">Sort</option>
<option value="Newest">Newest</option>
<option value="Oldest">Oldest</option>
</select>
</center>
</div>

         </form>

         </div>     
 
    )


}
export default SearchArea;