import React,{useContext} from  'react';
import {EmployeeContext} from "../employeecontext";
import { Addemployee } from './addemployee';


export const Heading = () => {
  const { deleteAll,addModal,setIsaddModal } = useContext(EmployeeContext);
  const handleDelete = () => {
    const shouldDelete = window.confirm(`Are you sure you want to delete?`);

    if (shouldDelete) {
      // Call the onDelete function to delete the item
      deleteAll();
    }
  };
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
      <button type="button" className="button button2 me-2"  onClick={handleDelete}>DELETE ALL</button>
      <button type="button" className="button button1"  onClick={() => setIsaddModal(true)} data-bs-toggle="modal" data-bs-target={`${addModal ?'#addemployee':''}`} >ADD EMPLOYEE</button>
      </div>
    </div>
  </div>
  {addModal?<Addemployee/>:''}
   
</nav>

        </div>
    )
}