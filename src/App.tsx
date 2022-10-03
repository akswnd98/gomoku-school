import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import Freestyle from './Freestyle';
import Home from './Home';
import Standard from './Standard';

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

export default function App() {
  return (
    <Root>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='standard' element={<Standard />} />
        <Route path='freestyle' element={<Freestyle />} />
      </Routes>
    </Root>
  );
}
