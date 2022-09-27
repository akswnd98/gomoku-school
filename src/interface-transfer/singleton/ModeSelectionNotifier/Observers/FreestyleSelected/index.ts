import Notifier from '../../../../Notifier';
import Observer from '../../../../Observer';
import { ModeType } from '../../../../Notifier/ModeSelection';
import Playout from '../../../Playout';
import FreestyleGame from '../../../../../Game/FreestyleGame';
import TfModel from '../../../TfModel';
import * as tf from '@tensorflow/tfjs';

export default class FreestyleSelected extends Observer {
  async update (notifier: Notifier, e: ModeType) {
    if (e === 'freestyle') {
      Playout.getInstance().setGame(new FreestyleGame());
      if ('indexedDB' in window) {
        try {
          TfModel.getInstance().setModel(await tf.loadGraphModel('indexeddb://freestyle-model'));
        } catch (e) {
          const model = await tf.loadGraphModel('/models/freestyle/model.json');
          await model.save('indexeddb://freestyle-model');
        }
      }
    }
  }
}
