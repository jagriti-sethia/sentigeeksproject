import React , { createContext,useReducer, useState  } from 'react';
import { employeeReducer } from './employeereducer';
import { employeeData } from './employeedata';
export const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
    const initialState = {
      employees: employeeData, // Your initial employee list
    };
  
    const [state, dispatch] = useReducer(employeeReducer, initialState);
    const[employeeslist,setemployee]  = useState(state.employees);
    const [editModal, setIseditModal] = useState(false);
    const [addModal, setIsaddModal] = useState(true);

    
    function deleteAll (){
      dispatch({
        type: 'DELETEALL',
      
    });
        };
    function removeEmployee(prop) {
      dispatch({
          type: 'REMOVE_EMPLOYEE',
          payload: prop
      });
  };
 

  function addEmployee(prop) {
      dispatch({
          type: 'ADD_EMPLOYEES',
          payload: prop
      });
  };

  function editEmployee(prop) {
    setIseditModal(true);
      dispatch({
          type: 'EDIT_EMPLOYEE',
          payload: prop
      });
  };
  
    return (
      <EmployeeContext.Provider value={{  employees: state.employees,employeeslist, removeEmployee,
        addEmployee,
        editEmployee,deleteAll,editModal, setIseditModal,addModal, setIsaddModal }}>
        {children}
      </EmployeeContext.Provider>
    );
  };
  
  export default EmployeeProvider;