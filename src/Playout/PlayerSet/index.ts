import Player from '@src/Player';
import AiPlayer from '@src/Player/AiPlayer';
import HumanPlayer from '@src/Player/HumanPlayer';

export default abstract class PlayerSet {
  abstract blackPlayer: Player;
  abstract whitePlayer: Player;
  abstract getAiPlayer (): AiPlayer;
  abstract getHumanPlayer (): HumanPlayer;
}
