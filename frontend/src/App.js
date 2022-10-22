import React from 'react';
import { BrowserRouter,  Routes, Route} from "react-router-dom";
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
         <Routes>
          <Route  path="/"  element={<Home />} />
          <Route  path="/addd" element={<AddEdit />} />
          <Route  path="/update/:id" element={<AddEdit />} />
          <Route  path="/view/:id" element={<View />} />
          <Route  path="/about" element={<About />} />  
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
