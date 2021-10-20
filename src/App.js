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
                <Link to="/joke">Jokes</Link>
              </li>
              <li className="nav-item">
                <Link to="/pictures">Pictures</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact>
              <div> <h1>Home page</h1> This is the home page</div>
            </Route>
            <Route path="/joke">
              <div> <h1>Joke</h1> How many programmers does it take to change a light bulb?
                None – It’s a hardware problem</div>
            </Route>
            <Route path="/pictures">
              <div> <h1>Pictures</h1>
              </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;