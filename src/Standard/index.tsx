import styled from '@emotion/styled';
import { ToastContainer, toast } from 'react-toastify';
import Board from './Board';
import PlayoutSingleton from '@src/interface-transfer/singleton/Playout';
import GameEnd from '@src/interface-transfer/singleton/Playout/Observers/GameEnd';
import 'react-toastify/dist/ReactToastify.css';

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

const BoardWrapper = styled.div`
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

export default function Standard () {
  const notifyBlackWin = () => toast('black win');
  const notifyWhiteWin = () => toast('white win');
  const notifyDraw = () => toast('draw');

  PlayoutSingleton.getInstance()!.notifier.registerObserver(new GameEnd({ notifyBlackWin, notifyWhiteWin, notifyDraw }));

  return (
    <Root>
      <Description>
        <DescriptionFont>Standard</DescriptionFont>
      </Description>
      <BoardWrapper>
        <Board />
      </BoardWrapper>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={true}
      />
    </Root>
  )
}
