import standardBoardSvg from '@assets/images/standard-board.svg';
import styled from '@emotion/styled';

const Root = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Description = styled.div`
  position: absolute;
  left: 100px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-contents: left;
  align-items: center;
`;

const Board = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const DescriptionFont = styled.div`
  font-family: NotoSansKR;
  font-size: 36px;
  font-weight: bold;
  margin-top: 20px;
`;

export default function StandardMode () {
  return (
    <Root>
      <Description>
        <DescriptionFont>Standard</DescriptionFont>
        <DescriptionFont>You are Black</DescriptionFont>
      </Description>
      <Board src={standardBoardSvg} />
    </Root>
  )
}
