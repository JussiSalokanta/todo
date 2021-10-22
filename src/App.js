import './App.css';
import Modal from './pages/modal';
import Completed from './pages/completed'
import Home from './pages/home'
import React from 'react';
import {useState} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  const [show, setShow] = useState(false)
 


  return (
    
          <BrowserRouter>
        <div className="App">
          <nav className="nav-bar">
            <ul>
              <li className="nav-item">
                <Link to="/">Home page</Link>
              </li>
              <li className="nav-item">
                <Link to="/completed">Completed</Link>
              </li>
              <li className="nav-item">
              <button className="infobutton" onClick={() => setShow(true)}>Info</button>
              <Modal onClose={() => setShow(false)} show = {show}/>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/completed" component={Completed}/>
          </Switch>
        </div>
      
      
      </BrowserRouter>
      
    );
  }
export default App;