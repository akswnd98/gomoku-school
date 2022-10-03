import Game from '..';

export default class StandardGame extends Game {
  boardSize: number = 15;

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
    for (let  i = 0; i < this.boardSize; i++) {
      for (let j = -1; j < this.boardSize - 5; j++) {
        let line = [];
        for (let k = 0; k < 7; k++) {
          line.push(this.getStone(boardState, j + k, i));
        }
        const checked = this.checkOnly5(line);
        if (checked !== 'playing') {
          return checked;
        }
      }
    }
    return 'playing';
  }

  private checkVertical (boardState: number[][]) {
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = -1; j < this.boardSize - 5; j++) {
        let line = [];
        for (let k = 0; k < 7; k++) {
          line.push(this.getStone(boardState, i, j + k));
        }
        const checked = this.checkOnly5(line);
        if (checked !== 'playing') {
          return checked;
        }
      }
    }
    return 'playing';
  }

  private checkDiagonalDec (boardState: number[][]) {
    for (let i = -1; i + 6 < this.boardSize + 1; i++) {
      for (let j = -1; j + 6 < this.boardSize + 1; j++) {
        let line = [];
        for (let k = 0; k < 7; k++) {
          line.push(this.getStone(boardState, i + k, j + k));
        }
        const checked = this.checkOnly5(line);
        if (checked !== 'playing') {
          return checked;
        }
      }
    }
    return 'playing';
  }

  private checkDiagonalInc (boardState: number[][]) {
    for (let i = -1; i + 6 < this.boardSize + 1; i++) {
      for (let j = this.boardSize; j - 6 >= -1; j--) {
        let line = [];
        for (let k = 0; k < 7; k++) {
          line.push(this.getStone(boardState, j - k, i + k));
        }
        const checked = this.checkOnly5(line);
        if (checked !== 'playing') {
          return checked;
        }
      }
    }
    return 'playing';
  }

  private getStone (boardState: number[][], x: number, y: number) {
    if (x >= 0 && x < this.boardSize && y >= 0 && y < this.boardSize) {
      return boardState[y][x];
    } else {
      return -1;
    }
  }

  private checkOnly5 (line: number[]) {
    let isEnd = line[1] !== 0 && line[0] !== line[1] && line[5] !== line[6];
    for (let i = 1; i <= 4; i++) {
      isEnd &&= line[i] === line[i + 1];
    }
    if (isEnd) {
      return line[1] === 1 ? 'black-win' : 'white-win';
    } else {
      return 'playing';
    }
  }
}
