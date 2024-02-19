import React from 'react';

import { Addemployee } from './addemployee';


export const Heading = () => {
    return(
        <div>
         
         <nav className="navbar navbar-expand-sm navbar-dark  container">
  <div className="container mx-5">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
         <h1>MANAGE EMPLOYEES</h1>
        </li>
        
      </ul>
      <div className="d-flex">
      <button type="button" className="button button2 me-2" data-bs-toggle="modal" data-bs-target="#myModal">Primary</button>
      <button type="button" className="button button1" data-bs-toggle="modal" data-bs-target="#addemployee">Success</button>
      </div>
    </div>
  </div>
  <Addemployee/> 
</nav>

        </div>
    )
}