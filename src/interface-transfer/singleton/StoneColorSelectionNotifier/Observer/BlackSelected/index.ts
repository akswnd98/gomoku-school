import Observer from '../../../../Observer';
import { StoneColorType } from '../../../../Notifier/StoneColorSelection';
import Notifier from '../../../../Notifier';
import PlayoutSingleton from '../../../../singleton/Playout';
import PlayoutStatic from '@src/Playout/static';
import AiPlayer from '../../../../../Player/AiPlayer';
import HumanPlayer from '../../../../../Player/HumanPlayer';
import TfModel from '../../../TfModel';
import { NavigateFunction } from 'react-router-dom';
import ModeSelectionNotifier from '@src/interface-transfer/singleton/ModeSelectionNotifier';
import PlayoutFactory from '@src/interface-transfer/singleton/PlayoutFactory';
import BlackFirst from '@src/Playout/PlayerSet/BlackFirst';

export type ConstructorParam = {
  navigate: NavigateFunction;
};

export default class BlackSelected extends Observer {
  navigate: NavigateFunction;

  constructor (payload: ConstructorParam) {
    super();
    this.navigate = payload.navigate;
  }

  async update (notifier: Notifier, e: StoneColorType) {
    if (e === 'black') {
      PlayoutFactory.getInstance().setPlayerSet(new BlackFirst({
        blackPlayer: new HumanPlayer(),
        whitePlayer: new AiPlayer({
          boardSize: PlayoutFactory.getInstance().game.boardSize,
          model: TfModel.getInstance().getModel()!,
        }),
      }));
      PlayoutSingleton.setInstance(PlayoutStatic.create(PlayoutFactory.getInstance()));
      this.navigate(`/${ModeSelectionNotifier.getInstance().getMode()}?color=black`);
    }
  }
}
