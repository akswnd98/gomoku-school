import Playout from '../../../Playout';

export type ModeType = 'black' | 'white';

export default class Singleton {
  private static instance?: Playout;

  public static getInstance () {
    return this.instance || (this.instance = undefined);
  }

  public static setInstance (instance: Playout) {
    this.instance = instance;
  }
}
