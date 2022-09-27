import { Root, ColorName } from '..'
import StoneColorSlectionNotifier from '../../../interface-transfer/singleton/StoneColorSelectionNotifier';

export default function Black () {
  return (
    <Root onClick={() => {
      console.log(StoneColorSlectionNotifier.getInstance().observers);
      StoneColorSlectionNotifier.getInstance().notify('black');
    }}>
      <ColorName>Black</ColorName>
    </Root>
  );
}
