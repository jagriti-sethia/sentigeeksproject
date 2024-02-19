
import './App.css';
import  {Employeelist}  from './components/employeelist';
import { Heading } from './components/header';
import DiagonalSum from './diagonalsum';

function App() {
  return (
    <div className="App">
     <Heading/> 
     <Employeelist/>
     <DiagonalSum/>
    </div>
  );
}

export default App;
