export type State = 'playing' | 'black-win' | 'white-win' | 'draw';

export default abstract class Game {
  abstract boardSize: number;
  abstract checkState (boardState: number[][]): State;
}
