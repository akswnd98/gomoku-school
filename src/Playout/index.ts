import Game from '../Game';
import StandardGame from '../Game/StandardGame';
import Player from '../Player';
import HumanPlayer from '../Player/HumanPlayer';
import BoardUpdateNotifier from '../interface-transfer/Notifier/BoardUpdate';

export default class Playout {
  game: Game = new StandardGame();
  blackPlayer: Player = new HumanPlayer();
  whitePlayer: Player = new HumanPlayer();
  curBoardState: number[][] = Array(this.game.boardSize).fill(0).map(() => Array(this.game.boardSize).fill(0));
  notifier: BoardUpdateNotifier = new BoardUpdateNotifier({ observers: [] });
  curTurn: 'black' | 'white' = 'black';

  setGame (game: Game) {
    this.game = game;
    this.curBoardState = Array(this.game.boardSize).fill(0).map(() => Array(this.game.boardSize).fill(0));
  }

  setBlackPlayer (player: Player) {
    this.blackPlayer = player;
  }

  setWhitePlayer (player: Player) {
    this.whitePlayer = player;
  }

  setNotifier (notifier: BoardUpdateNotifier) {
    this.notifier = notifier;
  }

  async step () {
    if (this.curTurn === 'black') {
      const action = await this.blackPlayer.step(this.curBoardState);
      this.curBoardState[action[1]][action[0]] = 1;
    } else {
      const action = await this.whitePlayer.step(this.curBoardState);
      this.curBoardState[action[1]][action[0]] = 2;
    }
    this.notifier.notify({ name: 'update-board', boardState: this.curBoardState });
    if (this.game.checkEnd(this.curBoardState)) {
      this.notifier.notify({ name: 'game-end' });
    }
    this.curTurn = this.curTurn === 'black' ? 'white' : 'black';
  }
}
