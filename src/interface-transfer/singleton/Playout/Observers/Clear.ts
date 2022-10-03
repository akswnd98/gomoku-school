import Notifier from '@src/interface-transfer/Notifier';
import Observer from '@src/interface-transfer/Observer';
import { EventType } from '@src/interface-transfer/Notifier/BoardUpdate';

export default class GameEnd extends Observer {
  async update (notifier: Notifier, e: EventType) {
    if (e.name === 'clear') {
      
    }
  }
}
