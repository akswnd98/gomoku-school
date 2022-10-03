import Game from '../Game';
import PlayerSet from './PlayerSet';
import BoardUpdateNotifier from '../interface-transfer/Notifier/BoardUpdate';

export type ConstructorParam = {
  game: Game;
  playerSet: PlayerSet;
  notifier: BoardUpdateNotifier;
};

export default class Playout {
  game: Game;
  playerSet: PlayerSet;
  notifier: BoardUpdateNotifier;
  curBoardState: number[][]
  curTurn: 'black' | 'white' = 'black';

  constructor (payload: ConstructorParam) {
    this.game = payload.game
    this.playerSet = payload.playerSet;
    this.notifier = payload.notifier;
    this.curBoardState = Array(this.game.boardSize).fill(0).map(() => Array(this.game.boardSize).fill(0));
  }

  async step () {
    if (this.curTurn === 'black') {
      const action = await this.playerSet.blackPlayer.step(this.curBoardState);
      this.curBoardState[action[1]][action[0]] = 1;
    } else {
      const action = await this.playerSet.whitePlayer.step(this.curBoardState);
      this.curBoardState[action[1]][action[0]] = 2;
    }
    await this.notifier.notify({ name: 'update-board', boardState: this.curBoardState });
    const state = this.game.checkState(this.curBoardState);
    if (state !== 'playing') {
      this.notifier.notify({ name: 'game-end', state });
    }
    this.curTurn = this.curTurn === 'black' ? 'white' : 'black';
  }
}
