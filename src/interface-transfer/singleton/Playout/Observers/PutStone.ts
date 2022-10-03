import Notifier from '../../../Notifier';
import Observer from '../../../Observer';
import { EventType } from '../../../Notifier/BoardUpdate';

export type ConstructorParam = {
  drawBlackStone: (cord: [number, number]) => void;
  drawWhiteStone: (cord: [number, number]) => void;
};

export default class PutStone extends Observer {
  drawBlackStone: (cord: [number, number]) => void;
  drawWhiteStone: (cord: [number, number]) => void;

  constructor (payload: ConstructorParam) {
    super();
    this.drawBlackStone = payload.drawBlackStone;
    this.drawWhiteStone = payload.drawWhiteStone;
  }

  async update (notifier: Notifier, e: EventType) {
    if (e.name === 'update-board') {
      for (let i = 0; i < e.boardState!.length; i++) {
        for (let j = 0; j < e.boardState![i].length; j++) {
          if (e.boardState![i][j] === 1) {
            this.drawBlackStone([j, i]);
          } else if (e.boardState![i][j] === 2) {
            this.drawWhiteStone([j, i]);
          }
        }
      }
    }
  }
}
