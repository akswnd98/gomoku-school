import { Root, ColorName } from '..'
import StoneColorSlectionNotifier from '../../../interface-transfer/singleton/StoneColorSelectionNotifier';

export default function White () {
  return (
    <Root onClick={() => StoneColorSlectionNotifier.getInstance().notify('white')}>
      <ColorName>White</ColorName>
    </Root>
  );
}
