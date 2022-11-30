import React from 'react'
import {Link} from'react-router-dom'


const Home = () => {
  return (
    
    <div className="" style={{width: "50rem", height:"20rem",marginLeft:"22%",marginTop:"1%"}}>
  <div className="card-body  " >
  <img src={require("../images/24by7.gif")} style={{width:"70%",marginLeft:"15%"}} className="card-img-top" alt="..."/>
  <div  style={{marginLeft:"35%"}}>
  <span ><h4  style={{fontSize:"20px", color:"red",marginTop:"-50px"}} id="Text_Scroll">Get Upto Rs 40 Lacs Instant Personal Loan @  NBC Bank.</h4></span>
  <Link to="/CreditScore">
  <button className="btn btn-primary bt-lg btn-block " style={{width:"50%",height:"70px" ,fontSize:"20px",marginTop:"-50px"}}  type="button">CheckYour Credit Score</button>
  </Link>
   </div>

  </div>
</div>
  )
}

export default Home
