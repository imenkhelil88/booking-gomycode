
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/LoginForm';
import HostList from './Components/Host/HostList';
import Hello from './Components/Hello';

 
function App() {
 
  return (
    <div className="App">
   
    <Routes> 
   
    <Route path ="/" element={<LoginForm/>}/>
    <Route path ="/host" element={<HostList/>}/>
    <Route path="/hello" element ={<Hello/>}/>
    
    </Routes>
     
    </div>
  );
}

export default App;
