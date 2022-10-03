import Game from '@src/Game';
import BoardUpdateNotifier from '@src/interface-transfer/Notifier/BoardUpdate';
import StandardGame from '@src/Game/StandardGame';
import PlayerSet from '../PlayerSet';
import GameEnd from '@src/interface-transfer/singleton/Playout/Observers/GameEnd';


export default class Factory {
  game: Game = new StandardGame();
  playerSet?: PlayerSet;
  notifier: BoardUpdateNotifier = new BoardUpdateNotifier({ observers: [] });

  setGame (game: Game) {
    this.game = game;
  }

  setPlayerSet (playerSet: PlayerSet) {
    this.playerSet = playerSet;
  }

  setNotifier (notifier: BoardUpdateNotifier) {
    this.notifier = notifier;
  }
}
