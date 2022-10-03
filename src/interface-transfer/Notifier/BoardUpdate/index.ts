import { State } from '@src/Game';
import Notifier from '..';

export type EventType = UpdateBoardEventType | GameEndEventType | ClearEventType;

export type UpdateBoardEventType = {
  name: 'update-board';
  boardState: number[][];
};

export type GameEndEventType = {
  name: 'game-end';
  state: State;
};

export type ClearEventType = {
  name: 'clear';
};

export default class BoardUpdateNotifier extends Notifier {
  async notify (e: EventType) {
    await super.notify(e)
  }
}
