import AiPlayer from '@src/Player/AiPlayer';
import HumanPlayer from '@src/Player/HumanPlayer';
import PlayerSet from '..';

export type ConstructorParam = {
  blackPlayer: AiPlayer;
  whitePlayer: HumanPlayer;
};

export default class WhiteFirst extends PlayerSet {
  blackPlayer: AiPlayer;
  whitePlayer: HumanPlayer;

  constructor (payload: ConstructorParam) {
    super();
    this.blackPlayer = payload.blackPlayer;
    this.whitePlayer = payload.whitePlayer;
  }

  getAiPlayer () {
    return this.blackPlayer;
  }

  getHumanPlayer () {
    return this.whitePlayer;
  }
}
