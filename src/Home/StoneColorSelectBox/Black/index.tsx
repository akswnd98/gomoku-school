import { Root, ColorName } from '..'
import StoneColorSlectionNotifier from '../../../interface-transfer/singleton/StoneColorSelectionNotifier';
import { useEffect } from 'react';
import StoneColorSelectionNotifier from '@src/interface-transfer/singleton/StoneColorSelectionNotifier';
import BlackSelected from '@src/interface-transfer/singleton/StoneColorSelectionNotifier/Observer/BlackSelected';
import { useNavigate } from 'react-router-dom';

export default function Black () {
  const navigate = useNavigate();

  useEffect(() => {
    StoneColorSelectionNotifier.getInstance().registerObserver(new BlackSelected({ navigate }));
  }, [navigate]);

  return (
    <Root onClick={() => {
      StoneColorSlectionNotifier.getInstance().notify('black');
    }}>
      <ColorName>Black</ColorName>
    </Root>
  );
}
