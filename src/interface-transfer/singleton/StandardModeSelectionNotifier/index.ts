import Notifier from '../../Notifier';
import { useNavigate } from 'react-router-dom';
import Observer from './Observer';

export default class Singleton {
  private static instance: Notifier;

  public static getInstance () {
    return this.instance || (this.instance = new Notifier({ observers: [] }));
  }
}
