import Notifier from '..';
import * as tf from '@tensorflow/tfjs';

export type ModeType = 'standard' | 'freestyle';

export default class ModeSelection extends Notifier {
  private mode: string

  constructor () {
    super({ observers: [] });
    this.mode = 'standard';
  }

  getMode () {
    return this.mode;
  }

  async notify (e: ModeType) {
    await super.notify(e);
  }
}
