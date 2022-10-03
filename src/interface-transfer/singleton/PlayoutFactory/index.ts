import Factory from '@src/Playout/Factory';

export default class Singleton {
  private static instance: Factory;

  public static getInstance () {
    return this.instance || (this.instance = new Factory());
  }
}
