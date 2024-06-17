import styled from '@emotion/styled';

import MuiDemo from './mui-demo';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <MuiDemo title="mui-demo" />
    </StyledApp>
  );
}

export default App;
