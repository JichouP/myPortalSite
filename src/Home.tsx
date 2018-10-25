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
        <h1>This is home</h1>
        <h1>Counter: {this.props.count.num}</h1>
      </div>
    );
  }
}
