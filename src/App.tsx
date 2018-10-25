import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Count from './Count';
import Show from './Show';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div
            id="left"
            style={{
              float: 'left',
              margin: 20,
            }}
          >
            <div>
              <Link to="/">
                <button>HOME</button>
              </Link>
            </div>
            <div>
              <Link to="/count">
                <button>COUNT</button>
              </Link>
            </div>
            <div>
              <Link to="/show">
                <button>SHOW</button>
              </Link>
            </div>
          </div>
          <div style={{ float: 'left', paddingLeft: 20 }}>
            <Route exact path="/" component={Home} />
            <Route path="/count" component={Count} />
            <Route path="/show" component={Show} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
