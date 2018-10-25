import React, { Component } from 'react';

export interface HelloProps {
  name: string;
}

class App extends Component<HelloProps, {}> {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
}

export default App;
