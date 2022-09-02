import React from 'react'
import styled from 'styled-components'
import { screenSize } from '../hooks/fonts&screen';

export default function Loser(props ) {
  const { solution, handleReset, arrayTally } = props; 


  return (
    <Wrapper>
      <Container>
        <Header>Oh no!</Header>
        <Text>The answer is </Text>
        <Text style={{color: 'blue'}}>{solution.solutions[arrayTally]}</Text>
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
  height: 85%;
  width: 50%;
  min-width: 300px;
  min-height: 600px;
  border-radius: 30px;
  background-color: white;
  ${screenSize.mobile}{
    width: 95%;
  }
  ${screenSize.tablet}{
    width: 80%;
  }
  ${screenSize.laptop}{
    width: 50%;
  }
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
  border-radius: 30px;
  padding: 3rem 0;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  width: 100%;
  height: 50%;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  text-align: center;
  width: 100%;
  height: 50%;
`;
const TryAgain = styled.button`
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  border: none;
  border-radius: 30px;
  font-size: 3rem;
`;