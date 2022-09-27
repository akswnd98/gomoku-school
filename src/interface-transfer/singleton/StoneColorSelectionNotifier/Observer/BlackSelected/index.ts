import Observer from '../../../../Observer';
import { StoneColorType } from '../../../../Notifier/StoneColorSelection';
import Notifier from '../../../../Notifier';
import Playout from '../../../../singleton/Playout';
import AiPlayer from '../../../../../Player/AiPlayer';
import HumanPlayer from '../../../../../Player/HumanPlayer';
import TfModel from '../../../TfModel';

export default class BlackSelected extends Observer {
  async update (notifier: Notifier, e: StoneColorType) {
    if (e === 'black') {
      Playout.getInstance().setBlackPlayer(new AiPlayer({
        boardSize: Playout.getInstance().game.boardSize,
        model: TfModel.getInstance().getModel()!,
      }));
      Playout.getInstance().setWhitePlayer(new HumanPlayer());
      // Playout.getInstance().setNotifier();
    }
  }
}
