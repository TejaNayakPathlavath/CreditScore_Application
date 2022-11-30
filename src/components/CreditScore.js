import React, { useState }from 'react'
import '../components/Find.css'
import { useNavigate} from 'react-router'
// import axios from"axios"

const CreditScore = () => {
  
  const [Data,setData]=useState("")
  const[UserDetails,setUserDetails]=useState({
    FullName:"",Gender:"",EmailAddress:"..@gmail.com", PhoneNumber:"+91",Address:"", PanNumber:"Ex: ALWPG5809L", Amount:"",Loan:"",
    PaidLoanInTime:""
  })
 

const navigate = useNavigate();
const handelOnChange=(e)=>{
  const{name,value}=e.target
  setUserDetails({
    ...UserDetails,[name]:value
  })
}

// This function will handle the submission.
async function onSubmit(e) {
e.preventDefault();

// When a post request is sent to the create url, we'll add a new record to the database.
const newPerson = { ...UserDetails };
await fetch("http://localhost:5000/record/add", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newPerson),
})
.catch(error => {
  window.alert(error);
  return;
});

setUserDetails({ 
FullName:"",Gender:"",EmailAddress:"..@gmail.com", PhoneNumber:"+91",Address:"", PanNumber:"Ex: ALWPG5809L", Amount:"",Loan:"",
    PaidLoanInTime:""});
navigate("/");
}
 const Change=(e)=>{
  e.preventDefault()
  
  if( UserDetails.Amount=="50000"){setData(" '350'")}
  else if( UserDetails.Amount<"50000"){setData("annual bank balance starts from 50,000 Rs/-, you need to maintain proper bank balance")}
  else if( UserDetails.Amount<="59999"){setData(" '450'")}
  else if( UserDetails.Amount<="69999"){setData(" '550'")}
  else if( UserDetails.Amount<="79999"){setData(" '650'")}
  else if( UserDetails.Amount<="89999"){setData(" '750'")}
  else if( UserDetails.Amount>"99999"){setData(" '900'")}

 }
  

 return (
    <div>
      
      <div id="bg_image"className="testbox">
      <div>
        {/* Add image */}
      <span> <img  id="Add_1" style={{width:"50%" ,marginLeft:"30px"}} src={require('../images/loan.jpg')} alt="" /></span>
      </div>
    <form onSubmit={onSubmit} >
      <div className="banner">
        <img  id="person"src={require('../images/person.gif') } alt=".." />
      </div>
      <br/>
    
      <fieldset>
        <legend>Credit Score Form</legend>
        <div className="colums">
         {/* Full Name */}
          <div className="item">
            <label htmlFor="FullName">Full Name<span>*</span></label>
            <input value={UserDetails.FullName}id="fname" type="text" onChange={handelOnChange} name="FullName" />
          </div>
          
          {/* Gender */}
          <div className="item">
            <label htmlFor="Gender"> Gender<span>*</span></label>
            <select name="Gender" id="Gender" onChange={handelOnChange}>
            <option  >Select</option>
            <option value={UserDetails.Male}  >Male</option>
            <option value={UserDetails.Female}>Female</option>
            </select>
          </div>
          {/* Email Address */}
          <div className="item">
            <label htmlFor="EmailAddress">Email Address<span>*</span></label>
            <input value={UserDetails.EmailAddress}required onChange={handelOnChange} id="address" type="text" name="EmailAddress" />
          </div>
          {/* Phone Number */}
          <div className="item">
            <label htmlFor="PhoneNumber">Phone Number<span>*</span></label>
            <input value={UserDetails.PhoneNumber} required onChange={handelOnChange} id="phone" type="tel" name="PhoneNumber"/>
          </div>
          {/* Address */}
          <div className="item">
            <label htmlFor="Address">Address<span>*</span></label>
            <input value={UserDetails.Address} required onChange={handelOnChange} id="Address" type="text"   name="Address" />
          </div>
          {/* PanNumber */}
          <div className="item">
            <label htmlFor="PanNumber">PanNumber<span>*</span></label>
            <input value={UserDetails.PanNumber} required onChange={handelOnChange} id="city" type="text" name="PanNumber" />
          </div> 
          </div>      
      </fieldset>
      <br/>
      <fieldset>
      <legend>Bank Transaction Details</legend>
      <div className="colums">
      </div>
      <div className="checkbox">
      <p>Select Option From Dropdown </p>
      </div>
      {/* Last 12 Months Average Bank Balance */}
      <div className="item">
      <label htmlFor="Amount">Last 12 Months Average Bank Balance<span>*</span></label>
      <input  value={UserDetails.Amount}onChange={handelOnChange} required id="amount" type="number" name="Amount" />
      </div>
      {/* Have you taken any bank loans */}
      <div className="item">
            <label htmlFor="Loan">Have you taken any bank loans<span>*</span></label>
            <select  name="Loan" id="loan" onChange={handelOnChange}>
            <option  >Select</option>
            <option value={UserDetails.Yes} >Yes</option>
            <option  value={UserDetails.No} name="Loan" >No</option>
            </select>
          </div>
          {/* Did You Paid Your Loan In Time */}
          <div className="item">
            <label htmlFor="PaidLoanInTime">Did You Paid Your Loan In Time<span>*</span></label>
            <select  name="PaidLoanInTime" id="loan1" onChange={handelOnChange}>
              <option  >Select</option>
            <option value={UserDetails.Yes} >Yes</option>
            <option value={UserDetails.No}  >No</option>
            </select>
          </div>
      </fieldset>
      <div className="btn-block">
        {/* <Link  id="CrsButton" to="/YourScore">
        </Link> */}
      <button  onClick={Change} type="submit" href="/">Get Score</button>
      </div>
      <div className="btn-block">
        {/* <Link  id="CrsButton" to="/YourScore">
        </Link> */}
      <button   type="submit" href="/">submit</button>
      </div>

    </form>
    <input hidden value={UserDetails.Score={Data}}id="fname" type="text" onChange={handelOnChange} name="Score" />
    <div>
      <span  ><h3    style={{color:"white",marginTop:"-195px",position:"fixed",marginLeft:"-300px",marginRight:"1000px",inlineSize: "400px", 
  overFlow: "hidden",backgroundColor:"black",fontSize:"30px",padding:"20px",border:"5px solid blue",borderRadius:"20px",width:"300px",opacity:"0.9"}}>Your"CRS"{Data}</h3></span>
    </div>
    </div>
    </div>
  )
}

export default CreditScore;
