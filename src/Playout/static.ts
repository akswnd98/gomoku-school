import Playout from '.';
import Factory from './Factory';

export default class Static {
  static create (factory: Factory) {
    if (factory.playerSet === undefined) {
      throw Error('create failed');
    }
    return new Playout({
      game: factory.game,
      playerSet: factory.playerSet,
      notifier: factory.notifier,
    });
  }
}
