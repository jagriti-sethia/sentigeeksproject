import React from 'react';
export const Editemployee = () => {
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
      <form>
      {/* <!-- Modal body --> */}
      <div className="modal-body">
        {/* Modal body.. */}
        <div class="mb-3 mt-3">
      <label for="name">Name:</label>
      <input type="text" class="form-control form-control-lg" id="name" placeholder="Enter name" name="name"/>
    </div>
    <div class="mb-3">
      <label for="email">Email:</label>
      <input type="email" class=" form-control form-control-lg" id="email" placeholder="Enter email" name="email"/>
    </div>
    <div class="mb-3 mt-3">
      <label for="address">Address:</label>
      <textarea class="form-control" rows="5" id="address" name="address"></textarea>
    </div>
    <div class="mb-3">
      <label for="phone">Phone:</label>
      <input type="number" class=" form-control form-control-lg" id="phone" placeholder="Enter phonenumber" name="phone"/>
    </div>
      </div>

      {/* <!-- Modal footer --> */}
      <div className="modal-footer">
        <button type="button" className="btn " data-bs-dismiss="modal">Close</button>
        <button type="button" className="button button1" >Success</button>
      </div>
      </form>
    </div>
  </div>
</div>
      
    </div>
  
    )
}
