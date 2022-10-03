import AiPlayer from '@src/Player/AiPlayer';
import HumanPlayer from '@src/Player/HumanPlayer';
import PlayerSetFactory from '..';

export default class White extends PlayerSetFactory {
  setBlackPlayer (player: AiPlayer) {
    super.setBlackPlayer(player);
  }

  setWhitePlayer (player: HumanPlayer) {
    super.setWhitePlayer(player);
  }
}
