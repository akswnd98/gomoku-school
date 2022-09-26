import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import FreestyleMode from './FreestyleMode';
import Home from './Home';
import StandardMode from './StandardMode';

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

export default function App() {
  return (
    <Root>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='standard-mode' element={<StandardMode />} />
        <Route path='freestyle-mode' element={<FreestyleMode />} />
      </Routes>
    </Root>
  );
}
