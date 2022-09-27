import * as tf from '@tensorflow/tfjs';

export default class TfModel {
  private model?: tf.GraphModel;

  setModel (model: tf.GraphModel) {
    this.model = model;
  }

  getModel () {
    return this.model;
  }
}
