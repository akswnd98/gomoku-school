import Game from '..';

export default class StandardGame extends Game {
  boardSize: number = 15;

  checkEnd (boardState: number[][]) {
    this.checkAlgorithms.forEach((check) => {
      if (check(boardState)) {
        return true;
      }
    });
    return false;
  }

  private checkAlgorithms = [
    this.checkHorizontal,
    this.checkVertical,
    this.checkDiagonalDec,
    this.checkDiagonalInc,
  ];

  private checkHorizontal (boardState: number[][]) {
    for (let  i = 0; i < this.boardSize; i++) {
      for (let j = -1; j < this.boardSize - 5; j++) {
        let line = [];
        for (let k = 0; k < 7; k++) {
          line.push(this.getStone(boardState, j + k, i));
        }
        if (this.checkOnly5(line)) {
          return true;
        }
      }
    }
    return false;
  }

  private checkVertical (boardState: number[][]) {
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = -1; j < this.boardSize - 5; j++) {
        let line = [];
        for (let k = 0; k < 7; k++) {
          line.push(this.getStone(boardState, i, j + k));
        }
        if (this.checkOnly5(line)) {
          return true;
        }
      }
    }
    return false;
  }

  private checkDiagonalDec (boardState: number[][]) {
    for (let i = -1; i + 6 < this.boardSize + 1; i++) {
      for (let j = -1; j + 6 < this.boardSize + 1; j++) {
        let line = [];
        for (let k = 0; k < 7; k++) {
          line.push(this.getStone(boardState, i + k, j + k));
        }
        if (this.checkOnly5(line)) {
          return true;
        }
      }
    }
    return false;
  }

  private checkDiagonalInc (boardState: number[][]) {
    for (let i = -1; i + 6 < this.boardSize + 1; i++) {
      for (let j = this.boardSize; j - 6 >= -1; j--) {
        let line = [];
        for (let k = 0; k < 7; k++) {
          line.push(this.getStone(boardState, i + k, j - k));
        }
        if (this.checkOnly5(line)) {
          return true;
        }
      }
    }
    return false;
  }

  private getStone (boardState: number[][], x: number, y: number) {
    if (x >= 0 && x < this.boardSize) {
      return boardState[y][x];
    } else {
      return -1;
    }
  }

  private checkOnly5 (line: number[]) {
    let ret = line[0] !== line[1] && line[4] !== line[5];
    for (let i = 1; i <= 4; i++) {
      ret &&= line[i] === line[i + 1];
    }
    return ret;
  }
}
