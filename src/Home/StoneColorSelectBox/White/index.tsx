import WhiteSelected from '@src/interface-transfer/singleton/StoneColorSelectionNotifier/Observer/WhiteSelected';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Root, ColorName } from '..'
import StoneColorSelectionNotifier from '../../../interface-transfer/singleton/StoneColorSelectionNotifier';

export default function White () {
  const navigate = useNavigate();

  useEffect(() => {
    StoneColorSelectionNotifier.getInstance().registerObserver(new WhiteSelected({ navigate }));
  }, [navigate]);

  return (
    <Root onClick={() => StoneColorSelectionNotifier.getInstance().notify('white')}>
      <ColorName>White</ColorName>
    </Root>
  );
}
