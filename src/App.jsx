import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact  from './pages/Contact';
import DetailsBook  from './pages/DetailsBook';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='/detailsBook' element={<DetailsBook/>} ></Route>

      </Routes>
    </div>
  );
}

export default App;
