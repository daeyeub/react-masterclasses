import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
 from{
 transform:rotate(0deg);
 border-radius:0px;
 }to{
 transform:rotate(360deg);
 border-radius:100px;
 }
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 0.5s linear infinite;
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>hello</span>
      </Box>
    </Wrapper>
  );
}

export default App;
