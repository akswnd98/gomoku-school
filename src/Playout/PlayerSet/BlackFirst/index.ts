import AiPlayer from '@src/Player/AiPlayer';
import HumanPlayer from '@src/Player/HumanPlayer';
import PlayerSet from '..';

export type ConstructorParam = {
  blackPlayer: HumanPlayer;
  whitePlayer: AiPlayer;
};

export default class BlackFirst extends PlayerSet {
  blackPlayer: HumanPlayer;
  whitePlayer: AiPlayer

  constructor (payload: ConstructorParam) {
    super();
    this.blackPlayer = payload.blackPlayer;
    this.whitePlayer = payload.whitePlayer;
  }

  getAiPlayer () {
    return this.whitePlayer ;
  }

  getHumanPlayer () {
    return this.blackPlayer;
  }
}
