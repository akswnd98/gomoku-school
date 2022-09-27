import Game from '..';

export default class FreestyleGame extends Game {
  boardSize: number = 20;

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
      for (let j = 0; j < this.boardSize - 5; j++) {
        let line = [];
        for (let k = 0; k < 5; k++) {
          line.push(this.getStone(boardState, j + k, i));
        }
        if (this.check5(line)) {
          return true;
        }
      }
    }
    return false;
  }

  private checkVertical (boardState: number[][]) {
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize - 5; j++) {
        let line = [];
        for (let k = 0; k < 5; k++) {
          line.push(this.getStone(boardState, i, j + k));
        }
        if (this.check5(line)) {
          return true;
        }
      }
    }
    return false;
  }

  private checkDiagonalDec (boardState: number[][]) {
    for (let i = 0; i + 4 < this.boardSize; i++) {
      for (let j = 0; j + 4 < this.boardSize; j++) {
        let line = [];
        for (let k = 0; k < 5; k++) {
          line.push(this.getStone(boardState, i + k, j + k));
        }
        if (this.check5(line)) {
          return true;
        }
      }
    }
    return false;
  }

  private checkDiagonalInc (boardState: number[][]) {
    for (let i = 0; i + 4 < this.boardSize; i++) {
      for (let j = this.boardSize - 1; j - 4 >= 0; j--) {
        let line = [];
        for (let k = 0; k < 5; k++) {
          line.push(this.getStone(boardState, i + k, j - k));
        }
        if (this.check5(line)) {
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

  private check5 (line: number[]) {
    let ret = true
    for (let i = 0; i < 4; i++) {
      ret &&= line[i] === line[i + 1];
    }
    return ret;
  }
}
