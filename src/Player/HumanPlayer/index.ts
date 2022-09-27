import Player from '..';

export default class HumanPlayer extends Player {
  private nextAction: [number, number] = [-1, -1];

  setNextAction (action: [number, number]) {
    this.nextAction = action;
  }

  async step (boardState: number[][]) {
    return this.nextAction;
  }
}
