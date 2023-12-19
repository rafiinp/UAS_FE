import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Utama from './Pages/Utama';
import Login from './Pages/Login';
import Register from './Pages/Register';
import List from './Pages/List';
import AddList from './Pages/AddList';
import EditList from './Pages/EditList';
import Resep from './Pages/Resep';
import DataResep from './Pages/DataResep';
import Testimonial from './Components/Testimonial';
import Contact1 from './Pages/Contact1';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Utama />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<List />} />
        <Route path="/addlist" element={<AddList />} />
        <Route path="/editlist/:id" element={<EditList />} />
        <Route path="/dataresep" element={<DataResep />} />
        <Route path="/resep" element={<Resep />} />
        <Route path="/testi" element={<Testimonial />} />
        <Route path="/contact" element={<Contact1 />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
