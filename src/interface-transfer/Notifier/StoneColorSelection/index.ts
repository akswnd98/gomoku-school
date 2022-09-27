import Notifier from '..';
import BlackSelected from '../../singleton/StoneColorSelectionNotifier/Observer/BlackSelected';
import WhiteSelected from '../../singleton/StoneColorSelectionNotifier/Observer/WhiteSelected';

export type StoneColorType = 'black' | 'white';

export default class StoneColorSelectionNotifier extends Notifier {
  constructor () {
    super({
      observers: [
        new BlackSelected(),
        new WhiteSelected(),
      ],
    });
  }

  async notify (e: StoneColorType) {
    await super.notify(e);
  }
}
