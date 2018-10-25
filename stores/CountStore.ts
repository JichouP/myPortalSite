import { observable, action, computed } from 'mobx';

export type CountStoreType = {
  count: number;
  getCount: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
};

export default class CountStore {
  @observable
  num = 0;

  @computed
  get getCount() {
    return this.num;
  }

  @action.bound
  onIncrement() {
    this.num = this.num + 1;
  }

  @action.bound
  onDecrement() {
    this.num = this.num - 1;
  }
}