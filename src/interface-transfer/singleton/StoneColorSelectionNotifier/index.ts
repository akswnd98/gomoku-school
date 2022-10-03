import StoneColorSelectionNotifier from '../../Notifier/StoneColorSelection';

export default class Singleton {
  private static instance: StoneColorSelectionNotifier;

  public static getInstance () {
    return this.instance || (this.instance = new StoneColorSelectionNotifier({ observers: [] }));
  }
}
