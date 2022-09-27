import { NavigateFunction } from 'react-router-dom';
import Notifier from '../../../../Notifier';
import Observer from '../../../../Observer';
import ModeSelectionNotifier from '../../../ModeSelectionNotifier'

export type ConstructorParam = {
  navigate: NavigateFunction;
};

export default class ColorSelection extends Observer {
  navigate: NavigateFunction;

  constructor (payload: ConstructorParam) {
    super();
    this.navigate = payload.navigate;
  }

  async update(notifier: Notifier, e: any) {
    this.navigate(`/${ModeSelectionNotifier.getInstance().getMode()}`);
  }
}
