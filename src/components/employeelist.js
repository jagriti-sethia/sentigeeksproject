import React ,{useContext,useState} from "react";
import { employeeData } from '../employeedata';
import {EmployeeContext} from "../employeecontext";
export const Employeelist = () => {
    const {employees, removeEmployee } = useContext(EmployeeContext);
   
    const [currentPage, setcurrentPage] = useState(1);
    const recordsperpage =5;
    const lastIndex = currentPage * recordsperpage;
    const firstIndex = lastIndex - recordsperpage;
    const records = employees.slice(firstIndex,lastIndex);
    const npage = Math.ceil(employees.length/ recordsperpage);
    const numbers = [...Array(npage+1).keys()].slice(1);
    function prePage(){
if(currentPage !== 1){
    setcurrentPage(currentPage-1)
}
    }
    function changeCpage(id){
        setcurrentPage(id)
    }
    function nextPage(){
        if(currentPage !== npage){
            setcurrentPage(currentPage+1)
        }
    }
    return(
        <div className="container">
             
<table className="container ">

<thead >

  <tr className="ml-3"> 
  <th><i className="fa-regular fa-square"></i></th>
    <th>Name</th>
    <th>Email</th>
    <th>Address</th>
    <th>Phone</th>
    <th>Actions</th>

  </tr>

</thead>
{ records?.map(employee => (
<tbody>

  <tr key={employee.id} >
  <td ><i className="fa-regular fa-square"></i></td>
    <td>{employee.name}</td>

    <td>{employee.email}</td>
    <td>{employee.address}</td>
    <td>{employee.phone}</td>

   

    <td>

      <button className="btn"><i className="fa-solid fa-pen text-warning "></i></button>

      <button className="btn" onClick={() => removeEmployee(employee)}><i className="fa fa-trash text-danger"></i></button>

    </td>

  </tr>



</tbody>
))}
</table>
<nav className="navbar navbar-expand-sm navbar-dark  container">
  <div className="container mx-5">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
<div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
         <h1>showing 5 out of 25 entries</h1>
        </li>
        
      </ul> 
<div className="d-flex">
<ul className="pagination  ">
    <li className="page-item"><a className="page-link" href="#" onClick={prePage}>Previous</a></li>
    {
        numbers.map((n,i)=>(
            <li className={`page-item ${currentPage === n?'active':''}`} key={i}><a className="page-link" href="#" onClick={()=>changeCpage(n)}>{n}</a></li>
        ))
    }
   
    
    <li className="page-item"><a className="page-link" href="#" onClick={nextPage}>Next</a></li>
  </ul></div> 

  </div>
  </div>
  
</nav>

        </div>
    )
}