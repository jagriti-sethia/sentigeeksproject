import React , { createContext,useReducer  } from 'react';
import { employeeReducer } from './employeereducer';
import { employeeData } from './employeedata';
export const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
    const initialState = {
      employees: employeeData, // Your initial employee list
    };
  
    const [state, dispatch] = useReducer(employeeReducer, initialState);
    function removeEmployee(employee) {
      dispatch({
          type: 'REMOVE_EMPLOYEE',
          payload: employee
      });
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
      <EmployeeContext.Provider value={{  employees: state.employees, removeEmployee,
        addEmployee,
        editEmployee }}>
        {children}
      </EmployeeContext.Provider>
    );
  };
  
  export default EmployeeProvider;