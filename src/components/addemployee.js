import React from 'react';
export const Addemployee = () => {
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

      {/* <!-- Modal body --> */}
      <div className="modal-body">
        Modal body..
      </div>

      {/* <!-- Modal footer --> */}
      <div className="modal-footer">
        <button type="button" className="btn " data-bs-dismiss="modal">Close</button>
        <button type="button" className="button button1" >Success</button>
      </div>

    </div>
  </div>
</div>
      
    </div>
  
    )
}
