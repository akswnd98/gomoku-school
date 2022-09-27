import Singleton from '../../../interface-transfer/singleton/ModeSelectionNotifier';
import { Root, ModeName, BoardSizeText, RuleDescription } from '..'
import FreestyleSelected from '../../../interface-transfer/singleton/ModeSelectionNotifier/Observers/FreestyleSelected';
import { useEffect } from 'react';

export default function Freestyle () {
  useEffect(() => {
    Singleton.getInstance().registerObserver(new FreestyleSelected());
  }, []);

  return (
    <Root onClick={() => Singleton.getInstance().notify('freestyle')}>
      <ModeName>Freestyle</ModeName>
      <BoardSizeText>20x20</BoardSizeText>
      <RuleDescription>5, 6, 7... OK</RuleDescription>
    </Root>
  );
}
