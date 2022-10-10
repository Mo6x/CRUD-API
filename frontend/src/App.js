import React from 'react';
import { BrowserRouter,  Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header';
import About from './components/pages/About';
import AddEdit from './components/pages/AddEdit';
import Home from './components/pages/Home';
import View from './components/pages/View';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
        <ToastContainer position='to-center' />
      
          <Router  path="/"  component={Home} />
          <Router  path="/addd" component={AddEdit} />
          <Router  path="/update/:id" component={AddEdit} />
          <Router  path="/view/:id" component={View} />
          <Router  path="/about" component={About} />  
    
      </div>
    </BrowserRouter >
  );
}

export default App;
