import Notifier from '../../Notifier/ModeSelection';

export default class Singleton {
  private static instance: Notifier;

  public static getInstance () {
    return this.instance || (this.instance = new Notifier());
  }
}
