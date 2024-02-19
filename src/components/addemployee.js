import React,{useState,useContext} from 'react';

import {EmployeeContext} from "../employeecontext";
export const Addemployee = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [address, setaddress] = useState('');
  const [phone, setphone] = useState('');
  const { addEmployee, employees } = useContext(EmployeeContext);


  const onSubmit = e => {
      e.preventDefault();
      const newEmployee = {
          id: employees.length + 1,
          name,
          address,
          email,
          phone
      }
      addEmployee(newEmployee);
      // history.push("/");
  }

    return(
        <div>
    {/* <!-- The Modal --> */}
<div className="modal" id="addemployee">
  <div className="modal-dialog">
    <div className="modal-content">

      {/* <!-- Modal Header --> */}
      <div className="modal-header">
        <h4 className="modal-title">Add Employee</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <form>
      {/* <!-- Modal body --> */}
      <div className="modal-body">
        {/* Modal body.. */}
        <div class="mb-3 mt-3">
      <label for="name">Name:</label>
      <input type="text" class="form-control form-control-lg" id="name" placeholder="Enter name" name="name" value={name} onChange={(e) => setname(e.target.value)} />
    </div>
    <div class="mb-3">
      <label for="email">Email:</label>
      <input type="email" class=" form-control form-control-lg" id="email" placeholder="Enter email" name="email" value={email} onChange={(e) => setemail(e.target.value)} />
    </div>
    <div class="mb-3 mt-3">
      <label for="address">Address:</label>
      <textarea class="form-control" rows="5" id="address" name="address" value={address} onChange={(e) => setaddress(e.target.value)} ></textarea>
    </div>
    <div class="mb-3">
      <label for="phone">Phone:</label>
      <input type="text" class=" form-control form-control-lg" id="phone" placeholder="Enter phonenumber" name="phone" value={phone} onChange={(e) => setphone(e.target.value)} />
    </div>
      </div>

      {/* <!-- Modal footer --> */}
      <div className="modal-footer">
        <button type="button" className="btn " data-bs-dismiss="modal">Close</button>
        <button type="submit" className="button button1" onClick={onSubmit}>Add employee</button>
      </div>
      </form>
    </div>
  </div>
</div>
      
    </div>
  
    )
}
