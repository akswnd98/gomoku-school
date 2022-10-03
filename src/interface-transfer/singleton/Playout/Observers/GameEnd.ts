import Notifier from '@src/interface-transfer/Notifier';
import Observer from '@src/interface-transfer/Observer';
import { EventType } from '../../../Notifier/BoardUpdate';

export type ConstructorParam = {
  notifyBlackWin: () => void;
  notifyWhiteWin: () => void;
  notifyDraw: () => void;
};

export default class GameEnd extends Observer {
  notifyBlackWin: () => void;
  notifyWhiteWin: () => void;
  notifyDraw: () => void;

  constructor (payload: ConstructorParam) {
    super();
    this.notifyBlackWin = payload.notifyBlackWin;
    this.notifyWhiteWin = payload.notifyWhiteWin;
    this.notifyDraw = payload.notifyDraw;
  }

  async update (notifier: Notifier, e: EventType)  {
    if (e.name === 'game-end') {
      if (e.state === 'black-win') {
        this.notifyBlackWin();
      } else if (e.state === 'white-win') {
        this.notifyWhiteWin();
      } else {
        this.notifyDraw();
      }
    }
  }
}
