import React , { createContext,useReducer  } from 'react';
import { employeeReducer } from './employeereducer';
export const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
    const initialState = {
      employees: [], // Your initial employee list
    };
  
    const [state, dispatch] = useReducer(employeeReducer, initialState);
  
    return (
      <EmployeeContext.Provider value={{ state, dispatch }}>
        {children}
      </EmployeeContext.Provider>
    );
  };
  
  export default EmployeeProvider;