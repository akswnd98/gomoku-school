import Player from '..';
import * as tf from '@tensorflow/tfjs';

export type ConstructorParam = {
  boardSize: number;
  model: tf.GraphModel;
};

export default class AiPlayer extends Player {
  boardSize: number;
  model: tf.GraphModel;

  constructor (payload: ConstructorParam) {
    super();
    this.boardSize = payload.boardSize;
    this.model = payload.model;
  }

  async step (boardState: number[][]) {
    let input = tf.tensor(boardState, [this.boardSize, this.boardSize], 'float32');
    input = tf.reshape(input, [1, this.boardSize, this.boardSize, 1]);
    const tensor = this.model.predict(input) as tf.Tensor<tf.Rank>;
    const arr = Array.from((await tensor.data()) as Float32Array);
    const pair = arr.map((v, i) => [v, i]);
    const sorted = pair.sort((a, b) => b[0] - a[0]);
    for (let i = 0; i < sorted.length; i++) {
      if (boardState[Math.floor(sorted[i][1] / this.boardSize)][sorted[i][1] % this.boardSize] === 0) {
        return [sorted[i][1] % this.boardSize, Math.floor(sorted[i][1] / this.boardSize)];
      }
    }
    return [-1, -1];
  }
}
