import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import ModeSelectionNotifier from '../interface-transfer/singleton/ModeSelectionNotifier';
import ModeSelectionObserver from '../interface-transfer/singleton/ModeSelectionNotifier/Observers/Selected';
import Standard from './ModeSelectBox/Standard';
import Freestyle from './ModeSelectBox/Freestyle';
import Black from './StoneColorSelectBox/Black';
import White from './StoneColorSelectBox/White';

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const SelectPhase = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxWrapper = styled.div`
  margin-left: 60px; 
`;

export default function Home () {
  const [selectPhase, setSelectPhase] = useState('mode');

  useEffect(() => {
    ModeSelectionNotifier.getInstance().registerObserver(new ModeSelectionObserver({ setSelectPhase }));
  }, []);

  return (
    <Root>
      {
        selectPhase === 'mode'
          && (
            <SelectPhase>
              <BoxWrapper>
                <Standard />
              </BoxWrapper>
              <BoxWrapper>
                <Freestyle />
              </BoxWrapper>
            </SelectPhase>
          )
      }
      {
        selectPhase === 'color'
          && (
            <SelectPhase>
              <BoxWrapper>
                <Black />
              </BoxWrapper>
              <BoxWrapper>
                <White />
              </BoxWrapper>
            </SelectPhase>
          )
      }
    </Root>
  );
}
