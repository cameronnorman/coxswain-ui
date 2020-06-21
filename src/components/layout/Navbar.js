import React from "react";
import './Navbar.css'
import { MdRowing } from 'react-icons/md'

function Navbar() {
  return (
    <div className="Navbar">
      <div className="wrapper">

      <MdRowing size={36}/>
      <h1>Coxswain</h1>
      </div>
      {/* <p>ip-address: bleh</p> */}
    </div>
  );
}

export default Navbar;