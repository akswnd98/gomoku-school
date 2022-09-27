import Notifier from '../../../../Notifier';
import Observer from '../../../../Observer';
import Playout from '../../../../singleton/Playout';
import AiPlayer from '../../../../../Player/AiPlayer';
import HumanPlayer from '../../../../../Player/HumanPlayer';
import TfModel from '../../../TfModel';

export default class WhiteSelected extends Observer {
  async update (notifier: Notifier, e: any) {
    Playout.getInstance().setBlackPlayer(new AiPlayer({
      boardSize: Playout.getInstance().game.boardSize,
      model: TfModel.getInstance().getModel()!,
    }));
    Playout.getInstance().setWhitePlayer(new HumanPlayer());
  }
}
