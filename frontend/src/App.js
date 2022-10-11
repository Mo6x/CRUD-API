import React from 'react';
import { BrowserRouter,  Router, Routers} from "react-router-dom";
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
         <Router>
          <Routers  path="/"  component={<Home />} />
          <Routers  path="/addd" component={<AddEdit />} />
          <Routers  path="/update/:id" component={<AddEdit />} />
          <Routers  path="/view/:id" component={<View />} />
          <Routers  path="/about" component={<About />} />  
        </Router>
      </div>
    </BrowserRouter >
  );
}

export default App;
