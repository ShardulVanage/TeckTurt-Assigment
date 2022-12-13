import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

import Profile from './components/Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';


function App() {

  return (
    <BrowserRouter>

      <div className="App">
        <Nav></Nav>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>

          <Route path='/Home' element={<Home></Home>}></Route>

          <Route path='/Profile' element={<Profile></Profile>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
