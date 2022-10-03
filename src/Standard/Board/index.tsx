import standardBoardSvg from '@assets/images/standard-board.svg';
import { useEffect, useRef } from 'react';
import { getImageFromUrl } from '../../ImageUtil';
import Playout from '../../interface-transfer/singleton/Playout';
import BoardUpdate from '../../interface-transfer/singleton/Playout/Observers/PutStone';
import { useLocation } from 'react-router-dom';
import { MouseEventHandler } from 'react';
import styled from '@emotion/styled';

const Root = styled.div`
`;

const CANVAS_START_POS = 25;
const BOARD_START_POS = CANVAS_START_POS + 7;
const BOARD_SPACE = 41;
const STONE_RADIUS = 20;

export default function Board () {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const location = useLocation();

  useEffect(() => {
    const context: CanvasRenderingContext2D = canvasRef.current!.getContext('2d')!;

    const drawBlackStone = (cord: [number, number]) => {
      context.beginPath();
      context.ellipse(
        cord[0] * BOARD_SPACE + BOARD_START_POS,
        cord[1] * BOARD_SPACE + BOARD_START_POS,
        STONE_RADIUS, STONE_RADIUS,
        0, 0, Math.PI * 2
      );
      context.fillStyle = 'black';
      context.fill();
      context.closePath();
    };
    
    const drawWhiteStone = (cord: [number, number]) => {
      context.beginPath();
      context.ellipse(
        cord[0] * BOARD_SPACE + BOARD_START_POS,
        cord[1] * BOARD_SPACE + BOARD_START_POS,
        STONE_RADIUS, STONE_RADIUS,
        0, 0, Math.PI * 2
      );
      context.fillStyle = '#ececec';
      context.fill();
      context.closePath();
    };

    const drawStarting = async () => {
      context.drawImage(await getImageFromUrl(standardBoardSvg), CANVAS_START_POS, CANVAS_START_POS);
      const query = new URLSearchParams(location.search);
      if (query.get('color') === 'white') {
        Playout.getInstance()!.step();
      }
    };
    drawStarting();

    Playout.getInstance()!.notifier.registerObserver(new BoardUpdate({
      drawBlackStone,
      drawWhiteStone,
    }));
    const startBoard = async () => {
      await Playout.getInstance()!.notifier.notify({ name: 'update-board', boardState: Playout.getInstance()!.curBoardState });
    };
    startBoard();
  }, [location]);

  const handleClick: MouseEventHandler<HTMLCanvasElement> = async (e) => {
    const x = Math.round((e.nativeEvent.offsetX - BOARD_START_POS) / BOARD_SPACE);
    const y = Math.round((e.nativeEvent.offsetY - BOARD_START_POS) / BOARD_SPACE);
    Playout.getInstance()!.playerSet.getHumanPlayer().setNextAction([x, y]);
    await Playout.getInstance()!.step();
    await Playout.getInstance()!.step();
  };

  return (
    <Root>
      <canvas width={640} height={640} ref={canvasRef} onClick={handleClick}></canvas>
    </Root>
  );
}
