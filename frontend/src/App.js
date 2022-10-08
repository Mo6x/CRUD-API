import React from 'react';
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddEdit from './components/pages/AddEdit';
import Home from './components/pages/Home';
import View from './components/pages/View';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/addd" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
          {/* <Route path="/about" element={about} /> */}
      </Routes>
      </div>
  );
}

export default App;
