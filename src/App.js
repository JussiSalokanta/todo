import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
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
                <Link to="/info">Info</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact>
              <div> <h1>Home page</h1> This is the home page</div>
            </Route>
            <Route path="/completed">
              <div> <h1>Completed</h1> Items you have completed are shown here</div>
            </Route>
            <Route path="/info">
              <div> <h1>Info</h1>
              </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;