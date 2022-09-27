import styled from '@emotion/styled';

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

export {
  Root,
  ModeName,
  BoardSizeText,
  RuleDescription,
};
