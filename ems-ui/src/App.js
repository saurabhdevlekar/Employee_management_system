import './App.css';
import Navbar from './componant/Navbar';
import { Route, Routes} from 'react-router-dom';
import Home from './componant/Home';
import AddEmployee from './componant/AddEmployee';
import EditEmployee from './componant/EditEmployee';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/AddEmployee' element={<AddEmployee/>}></Route>
      {/* <Route path='/EditEmployee/:id' element={<EditEmployee/>}></Route> */}
      <Route path="/edit/:id" element={<EditEmployee />} />  {/* Edit Route */}
    </Routes>
    </> 
  );
}

export default App;
