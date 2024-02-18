const employeeReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_EMPLOYEE':
        return { ...state, employees: [...state.employees, action.payload] };
      // Handle other CRUD operations here
      default:
        return state;
    }
  };
  
  export { employeeReducer };