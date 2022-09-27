import Notifier from '..';

export type EventNameType = 'update-board' | 'game-end' | 'clear';

export type EventType = {
  name: EventNameType;
  boardState?: number[][];
};

export default class BoardUpdateNotifier extends Notifier {
  async notify (e: EventType) {
    await super.notify(e)
  }
}
