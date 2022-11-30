import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <div>
      <nav className='fixed-top'>
      <ul>
      <li><span> <i id="icon_1" className="fa-solid fa-building-columns"></i></span></li>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/CreditScore">Check Credit Score</Link></li>
  <li><Link to="/CreditScoreRecordList">List Of Records</Link></li>
  <li ><Link to="/About">About</Link></li>
</ul>
      </nav>
    </div>
   
    </div>
  )
}

export default Navbar
