import TfModel from '../../../TfModel';

export default class Singleton {
  private static instance: TfModel;

  public static getInstance () {
    return this.instance || (this.instance = new TfModel());
  }
}
