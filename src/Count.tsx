import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { CountStoreType } from '../stores/CountStore';

type Props = {
  count?: CountStoreType;
};

@inject('count')
@observer
export default class Home extends Component<Props> {
  render() {
    return (
      <div>
        <h1>Counter: {this.props.count.num}</h1>
        <h1>DoubleCounter: {this.props.count.getDoubleCount}</h1>
        <button onClick={this.props.count.onIncrement}>カウント+1</button>
        <button onClick={this.props.count.onDecrement}>カウント-1</button>
      </div>
    );
  }
}
