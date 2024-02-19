import React , { createContext,useReducer, useState  } from 'react';
import { employeeReducer } from './employeereducer';
import { employeeData } from './employeedata';
export const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
    const initialState = {
      employees: employeeData, // Your initial employee list
    };
  
    const [state, dispatch] = useReducer(employeeReducer, initialState);
    const[employees,setemployee]  = useState(state.employees);
    function removeEmployee(employee) {
      dispatch({
          type: 'REMOVE_EMPLOYEE',
          payload: employee
      });
  };
  function deleteAll (){
setemployee(['']);
  };

  function addEmployee(employees) {
      dispatch({
          type: 'ADD_EMPLOYEES',
          payload: employees
      });
  };

  function editEmployee(employees) {
      dispatch({
          type: 'EDIT_EMPLOYEE',
          payload: employees
      });
  };
  
    return (
      <EmployeeContext.Provider value={{  employees, removeEmployee,
        addEmployee,
        editEmployee,deleteAll }}>
        {children}
      </EmployeeContext.Provider>
    );
  };
  
  export default EmployeeProvider;