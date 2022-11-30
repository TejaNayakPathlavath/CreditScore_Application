import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Update() {
  const [Data,setData]=useState("")
    const[UserDetails,setUserDetails]=useState({
        FullName:"",Gender:"",EmailAddress:"..@gmail.com", PhoneNumber:"+91",Address:"", PanNumber:"Ex: ALWPG5809L", Amount:"",Loan:"",
        PaidLoanInTime:"",
        record:[]
      })
 const params = useParams();
 const navigate = useNavigate();
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
 
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setUserDetails(record);
   }
 
   fetchData();
 
   
    
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 const handelOnChange=(e)=>{
    const{name,value}=e.target
    setUserDetails({
      ...UserDetails,[name]:value
    })
  }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
    FullName:UserDetails. FullName,
    Gender:UserDetails. Gender,
    EmailAddress:UserDetails. EmailAddress, 
    PhoneNumber:UserDetails. PhoneNumber,
    Address:UserDetails. Address,
    PanNumber:UserDetails. PanNumber, 
    Amount:UserDetails. Amount,
    Loan:UserDetails. Loan ,
    PaidLoanInTime:UserDetails. PaidLoanInTime

   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
<div>
      
      <div id="bg_image"className="testbox">
      <div>
       <h1> </h1>
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
      <button   type="submit" href="/">Get Score</button>
      </div>

    </form>

    <div>
      <span  ><h3    style={{color:"white",marginTop:"-300px",position:"fixed",marginLeft:"-200px",marginRight:"1000px",inlineSize: "400px", 
  overFlow: "hidden",backgroundColor:"black",fontSize:"30px",padding:"20px",border:"5px solid blue",borderRadius:"20px",width:"300px",opacity:"0.9"}}>Your"CRS"{Data}</h3></span>
    </div>
    </div>
    </div>
    
 )}
