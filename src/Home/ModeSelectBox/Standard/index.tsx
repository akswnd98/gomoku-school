import Singleton from '../../../interface-transfer/singleton/ModeSelectionNotifier';
import { Root, ModeName, BoardSizeText, RuleDescription } from '..'
import StandardSelected from '../../../interface-transfer/singleton/ModeSelectionNotifier/Observers/StandardSelected';
import { useEffect } from 'react';

export default function Standard () {
  useEffect(() => {
    Singleton.getInstance().registerObserver(new StandardSelected());
  }, []);

  return (
    <Root onClick={() => Singleton.getInstance().notify('standard')}>
      <ModeName>Standard</ModeName>
      <BoardSizeText>15x15</BoardSizeText>
      <RuleDescription>Only 5</RuleDescription>
    </Root>
  );
}
