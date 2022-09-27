import Notifier from '../../../../Notifier';
import Observer from '../../../../Observer';
import { ModeType } from '../../../../Notifier/ModeSelection';

export type ConstructorParam = {
  setSelectPhase: (phase: string) => void;
};

export default class ModeSelection extends Observer {
  private setSelectPhase: (phase: string) => void;

  constructor (payload: ConstructorParam) {
    super();
    this.setSelectPhase = payload.setSelectPhase;
  }

  async update (notifier: Notifier, e: ModeType) {
    this.setSelectPhase('color');
  }
}
