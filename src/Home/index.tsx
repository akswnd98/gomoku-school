import ModeSelectBox from './ModeSelectBox';
import styled from '@emotion/styled';

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModeSelectBoxWrapper = styled.div`
  margin-left: 60px; 
`;

export default function Home () {
  return (
    <Root>
      <ModeSelectBoxWrapper>
        <ModeSelectBox modeName="Standard" boardSizeText="15x15" ruleDescription="Only 5" refUrl='/standard-mode' />
      </ModeSelectBoxWrapper>
      <ModeSelectBoxWrapper>
        <ModeSelectBox modeName="Freestyle" boardSizeText="20x20" ruleDescription="5, 6, 7, ... OK" refUrl='/freestyle-mode' />
      </ModeSelectBoxWrapper>
    </Root>
  );
}
