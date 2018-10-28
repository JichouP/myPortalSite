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
        <h1 className="title">ようこそ</h1>
      </div>
    );
  }
}
