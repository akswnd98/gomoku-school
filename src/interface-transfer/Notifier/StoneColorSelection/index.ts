import Notifier from '..';

export type StoneColorType = 'black' | 'white';

export default class StoneColorSelectionNotifier extends Notifier {
  async notify (e: StoneColorType) {
    await super.notify(e);
  }
}
