import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import LinkPage from './Link';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div
            id="link-row"
            style={{
              margin: 20,
              textAlign: 'center',
            }}
          >
            <Link to="/">
              <button className="selector">HOME</button>
            </Link>
            <Link to="/about">
              <button className="selector">ABOUT</button>
            </Link>
            <Link to="/link">
              <button className="selector">LINK</button>
            </Link>
          </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/link" component={LinkPage} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
