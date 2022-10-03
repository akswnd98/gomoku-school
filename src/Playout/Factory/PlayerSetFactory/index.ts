import HumanPlayer from '@src/Player/HumanPlayer';
import Player from '@src/Player';

export default class PlayerSetFactory {
  blackPlayer: Player = new HumanPlayer();
  whitePlayer: Player = new HumanPlayer();

  setBlackPlayer (player: Player) {
    this.blackPlayer = player;
  }

  setWhitePlayer (player: Player) {
    this.whitePlayer = player;
  }
}
