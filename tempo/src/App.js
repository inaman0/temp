import Page3 from "./components/Page3";
import Page2 from "./components/Page2";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Page1 from "./components/Page1";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Edit from './components/Edit/Edit';



function App() {
  return (
    <Routes>
      
      <Route path='/edit' element={<Edit/>}/>
      <Route path='/page1' element={<Page1 />}/>
  <Route path='/registration' element={<Registration />}/>
  <Route path='/login' element={<Login />}/>
  <Route path='/page2' element={<Page2 />}/>
  <Route path='/page3' element={<Page3 />}/>
</Routes>
  );
}

export default App;
