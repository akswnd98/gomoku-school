export default abstract class Player {
  abstract step (boardState: number[][]): Promise<number[]>;
}
