import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
function App() {
  return (
    <>
      <Wrapper>
        <Title>title</Title>
      </Wrapper>
    </>
  );
}

export default App;
