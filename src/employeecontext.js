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
    const [iseditModalOpen, setIseditModalOpen] = useState(false);
    const [isaddModalOpen, setIsaddModalOpen] = useState(true);

    const openeditModal = (employee) => {
      setIseditModalOpen(true);
      editEmployee(employee);
    };
  
    const closeeditModal = () => {
      setIseditModalOpen(false);
    };
    const openaddModal = (employee) => {
      setIsaddModalOpen(true);
   
    };
  
    const closeaddModal = () => {
      setIsaddModalOpen(false);
    };
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
      dispatch({
          type: 'EDIT_EMPLOYEE',
          payload: prop
      });
  };
  
    return (
      <EmployeeContext.Provider value={{  employees: state.employees,employeeslist, removeEmployee,
        addEmployee,
        editEmployee,deleteAll,isaddModalOpen,iseditModalOpen,closeaddModal,closeeditModal,setIseditModalOpen,setIsaddModalOpen,openaddModal,openeditModal }}>
        {children}
      </EmployeeContext.Provider>
    );
  };
  
  export default EmployeeProvider;