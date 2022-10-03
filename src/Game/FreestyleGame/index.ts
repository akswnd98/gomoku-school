import Game from '..';

export default class FreestyleGame extends Game {
  boardSize: number = 20;

  checkState (boardState: number[][]) {
    for (let check of this.checkAlgorithms) {
      const checked = check(boardState);
      if (checked !== 'playing') {
        return checked;
      }
    }
    if (this.checkFull(boardState)) {
      return 'draw';
    } else {
      return 'playing';
    }
  }

  checkFull (boardState: number[][]) {
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize; j++) {
        if (boardState[i][j] === 0) {
          return false;
        }
      }
    }
    return true;
  }

  private checkAlgorithms = [
    (boardState: number[][]) => this.checkHorizontal(boardState),
    (boardState: number[][]) => this.checkVertical(boardState),
    (boardState: number[][]) => this.checkDiagonalDec(boardState),
    (boardState: number[][]) => this.checkDiagonalInc(boardState),
  ];

  private checkHorizontal (boardState: number[][]) {
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize - 5; j++) {
        let line = [];
        for (let k = 0; k < 5; k++) {
          line.push(this.getStone(boardState, j + k, i));
        }
        const checked = this.check5(line);
        if (checked !== 'playing') {
          return checked;
        }
      }
    }
    return 'playing';
  }

  private checkVertical (boardState: number[][]) {
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize - 5; j++) {
        let line = [];
        for (let k = 0; k < 5; k++) {
          line.push(this.getStone(boardState, i, j + k));
        }
        const checked = this.check5(line);
        if (checked !== 'playing') {
          return checked;
        }
      }
    }
    return 'playing';
  }

  private checkDiagonalDec (boardState: number[][]) {
    for (let i = 0; i + 4 < this.boardSize; i++) {
      for (let j = 0; j + 4 < this.boardSize; j++) {
        let line = [];
        for (let k = 0; k < 5; k++) {
          line.push(this.getStone(boardState, i + k, j + k));
        }
        const checked = this.check5(line);
        if (checked !== 'playing') {
          return checked;
        }
      }
    }
    return 'playing';
  }

  private checkDiagonalInc (boardState: number[][]) {
    for (let i = 0; i + 4 < this.boardSize; i++) {
      for (let j = this.boardSize - 1; j - 4 >= 0; j--) {
        let line = [];
        for (let k = 0; k < 5; k++) {
          line.push(this.getStone(boardState, i + k, j - k));
        }
        const checked = this.check5(line);
        if (checked !== 'playing') {
          return checked;
        }
      }
    }
    return 'playing';
  }

  private getStone (boardState: number[][], x: number, y: number) {
    if (x >= 0 && x < this.boardSize) {
      return boardState[y][x];
    } else {
      return -1;
    }
  }

  private check5 (line: number[]) {
    let isEnd = line[0] !== 0;
    for (let i = 0; i < 4; i++) {
      isEnd &&= line[i] === line[i + 1];
    }
    if (isEnd) {
      return line[0] === 1 ? 'black-win' : 'white-win';
    } else {
      return 'playing';
    }
  }
}
