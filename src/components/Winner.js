import React from 'react'
import styled
 from 'styled-components';

export default function Winner(props) {
  const {handleReset , arrayTally} = props;

  return (
    <Wrapper>
      <Container>
        <Header>Won in {arrayTally} {arrayTally === 1 ? 'move' : 'moves'}</Header>
        <TryAgain onClick={handleReset} >Go again!</TryAgain>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;


`;
const Container = styled.div`
  position: relative;
  width: 70%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid black;
  border-radius: 30px;
  padding: 3rem 0;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  width: 100%;
  height: 50%;
  text-align: center;
`;

const TryAgain = styled.button`
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  border: 1px solid black;
  border-radius: 30px;
  font-size: 3rem;
`;