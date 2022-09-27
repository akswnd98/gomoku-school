export default abstract class Game {
  abstract boardSize: number;
  abstract checkEnd (boardState: number[][]): boolean;
}
