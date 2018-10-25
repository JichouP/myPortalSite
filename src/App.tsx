import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Count from './Count';
import Show from './Show';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/count" component={Count} />
          <Route path="/show" component={Show} />
        </div>
      </BrowserRouter>
    );
  }
}
