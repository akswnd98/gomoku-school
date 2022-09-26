import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import Singleton from '../../interface-transfer/singleton/StandardModeSelectionNotifier';
import Observer from '../../interface-transfer/singleton/StandardModeSelectionNotifier/Observer';

export type Props = {
  modeName: string;
  boardSizeText: string;
  ruleDescription: string;
  refUrl: string;
};

const Root = styled.div`
  width: 250px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify_content: left;
  align-items: center;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 5%);
  font-family: NotoSansKR;
  cursor: pointer;
  user-select: none;
`;

const ModeName = styled.div`
  margin-top: 20px;
  font-size: 16px;
`;

const BoardSizeText = styled.div`
  margin-top: 8px;
  font-size: 24px;
  font-weight: bold;
`;

const RuleDescription = styled.div`
  margin-top: 8px;
  font-size: 24px;
  font-weight: bold;
`;

export default function ModeSelectBox (props: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    Singleton.getInstance().registerObserver(new Observer({ navigate }));
  }, []);

  return (
    <Root onClick={() => Singleton.getInstance().notify(props.refUrl)}>
      <ModeName>{props.modeName}</ModeName>
      <BoardSizeText>{props.boardSizeText}</BoardSizeText>
      <RuleDescription>{props.ruleDescription}</RuleDescription>
    </Root>
  );
}
