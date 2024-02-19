import React from 'react';
import {useContext, useState} from 'react';
import {EmployeeContext} from "../employeecontext";
export const Editemployee = ({theEmployee}) => {
  const { employees, editEmployee,setIseditModal } = useContext(EmployeeContext);
  const id = theEmployee.id;

  const [name, setName] = useState(theEmployee.name);
  const [email, setEmail] = useState(theEmployee.email);
  const [address, setAddress] = useState(theEmployee.address);
  const [phone, setPhone] = useState(theEmployee.phone);

  const updatedEmployee = {id, name, email, address, phone}
  const onSubmit = e => {
    e.preventDefault();
    editEmployee(updatedEmployee);
    setIseditModal(false);
    
}

    return(
        <div>
    {/* <!-- The Modal --> */}
<div className="modal" id="editemployee">
  <div className="modal-dialog">
    <div className="modal-content">

      {/* <!-- Modal Header --> */}
      <div className="modal-header">
        <h4 className="modal-title">Edit Employee</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <form onSubmit={onSubmit}>
      {/* <!-- Modal body --> */}
      <div className="modal-body">
        {/* Modal body.. */}
        <div class="mb-3 mt-3">
      <label for="name">Name:</label>
      <input type="text" class="form-control form-control-lg" id="name" placeholder="Enter name" name="name" value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required/>
    </div>
    <div class="mb-3">
      <label for="email">Email:</label>
      <input type="email" class=" form-control form-control-lg" id="email" placeholder="Enter email" name="email" value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required/>
    </div>
    <div class="mb-3 mt-3">
      <label for="address">Address:</label>
      <textarea class="form-control" rows="5" id="address" name="address" 
                    value={address}
                    onChange={(e)=> setAddress(e.target.value)}></textarea>
    </div>
    <div class="mb-3">
      <label for="phone">Phone:</label>
      <input type="text" class=" form-control form-control-lg" id="phone" placeholder="Enter phonenumber" name="phone"  value={phone}
                    onChange={(e)=> setPhone(e.target.value)} required/>
    </div>
      </div>

      {/* <!-- Modal footer --> */}
      <div className="modal-footer">
        <button type="button" className="btn " data-bs-dismiss="modal">Close</button>
        <button type="submit" className="button button1" onClick={onSubmit}>Success</button>
      </div>
      </form>
    </div>
  </div>
</div>
      
    </div>
  
    )
}