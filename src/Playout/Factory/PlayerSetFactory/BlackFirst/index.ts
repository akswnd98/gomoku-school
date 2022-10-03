import AiPlayer from '@src/Player/AiPlayer';
import HumanPlayer from '@src/Player/HumanPlayer';
import PlayerSetFactory from '..';

export default class Black extends PlayerSetFactory {
  setBlackPlayer (player: HumanPlayer) {
    super.setBlackPlayer(player);
  }

  setWhitePlayer (player: AiPlayer) {
    super.setWhitePlayer(player);
  }
}
