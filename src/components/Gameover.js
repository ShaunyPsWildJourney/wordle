import React, {useContext} from 'react'
import { AppContext } from '../App';
import styled from 'styled-components';
import {  colors } from '../fonts&screen';

export default function Gameover() {

  const { gameOver, currAttempt, correctWord, handleRetry} = useContext(AppContext); 



  return (<>
    <Wrapper>
    <Container>
    { gameOver.guessedWord 
      ? <Header>You won in {currAttempt.attempt} attempts! </Header>
      : <Header>You lost in {currAttempt.attempt} attempts.<Text>Correct answer is </Text> </Header>
    }
      
      <Bold>{correctWord.toUpperCase()} </Bold>
      <Retry onClick={handleRetry}>Next WORD</Retry>
</Container>
    </Wrapper>
    </>)
}



const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.grey3};
  border-radius: 10px;
`;
const Header = styled.div`
    font-size: 2rem;
    text-align: center;
`;
const Text = styled.div`
  font-size: 2rem;
  text-align: center;

`;
const Bold = styled.div`
  font-size: 3.5rem;
  font-weight: 500;
  padding: 1rem;
  margin: 1rem;
  background-color: white;
  border-radius: 10px;
  color: ${colors.green2};
  text-align: center;

`;
const Retry = styled.button`
    font-size: 3rem;
  font-weight: 500;
  padding: 1rem;
  margin: 1rem;
  border: 4px solid ${colors.grey3};
  /* background-color: white; */
  border-radius: 10px;
  text-align: center;
  animation: changeColor 1.5s infinite alternate;
  @keyframes changeColor {
    0% {
      background-color:white;
    } 33% {
      background-color:  ${colors.green2};
    } 66% {
      background-color:  ${colors.orange1};
    } 100% {
      background-color:white;
    }
  } 
`;