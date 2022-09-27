import styled from '@emotion/styled';

const Root = styled.div`
  width: 250px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 5%);
  font-family: NotoSansKR;
  cursor: pointer;
  user-select: none;
`;

const ColorName = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export {
  Root,
  ColorName,
};
