
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/LoginForm';
import HostList from './Components/Host/HostList';
import ReservationList from './Components/Reservation/ReservationList';
import UserList from './Components/User/UserList';
import Contact from './Components/Contact';

 
function App() {
//  const dispatch=useDispatch()
//  useEffect(()=>{
//   dispatch(Get_user())
//  },[dispatch])
//  const user=useSelector((state)=>console.log(state))
  return (
    <div className="App">
   
    <Routes> 
   
    <Route path ="/" element={<LoginForm/>}/>
    <Route path ="/host" element={<HostList/>}/>
    <Route path ="/user" element={<UserList />}/>
    <Route path="/reservation" element ={<ReservationList/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
    </Routes>
     
    </div>
  );
}

export default App;
