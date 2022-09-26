import { NavigateFunction } from 'react-router-dom';
import Notifier from '../../../Notifier';
import Observer from '../../../Observer';

export type ConstructorParam = {
  navigate: NavigateFunction;
};

export default class StandardModeSelection extends Observer {
  navigate: NavigateFunction;

  constructor (payload: ConstructorParam) {
    super();
    this.navigate = payload.navigate;
  }

  async update(notifier: Notifier, e: string) {
    this.navigate(e);
  }
}
