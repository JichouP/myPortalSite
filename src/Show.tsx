import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { CountStoreType } from '../stores/CountStore';

type Props = {
  count?: CountStoreType;
};

@inject('count')
@observer
export default class Show extends Component<Props> {
  render() {
    return (
      <div>
        <h1>Counter: {this.props.count.num}</h1>
      </div>
    );
  }
}
