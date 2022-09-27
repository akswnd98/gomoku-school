import Notifier from '../../../../Notifier';
import Observer from '../../../../Observer';
import { ModeType } from '../../../../Notifier/ModeSelection';
import Playout from '../../../Playout';
import StandardGame from '../../../../../Game/StandardGame';
import TfModel from '../../../TfModel';
import * as tf from '@tensorflow/tfjs';

export default class StandardSelected extends Observer {
  async update (notifier: Notifier, e: ModeType) {
    if (e === 'standard') {
      Playout.getInstance().setGame(new StandardGame());
      if ('indexedDB' in window) {
        try {
          TfModel.getInstance().setModel(await tf.loadGraphModel('indexeddb://standard-model'));
        } catch (e) {
          const model = await tf.loadGraphModel('/models/standard/model.json');
          await model.save('indexeddb://standard-model');
        }
      }
    }
  }
}
