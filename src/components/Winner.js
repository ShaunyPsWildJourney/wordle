import React from 'react'
import styled from 'styled-components';
import { screenSize, colors } from '../hooks/fonts&screen';


export default function Winner(props) {
  const {handleReset , arrayTally} = props;

  return (
    <Wrapper>
      <Container>
        <Header>Won in {arrayTally} {arrayTally === 1 ? 'move' : 'moves'}!</Header>
        <TryAgain onClick={handleReset} >Go again!</TryAgain>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  height: 75%;
  ;
  ${screenSize.mobile}{
    width: 100%;
  }
  ${screenSize.tablet}{
    border-radius: 30px;
    width: 80%;
  }
  ${screenSize.laptop}{
    width: 50%;
  }
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
  text-align: center;
`;

const TryAgain = styled.button`
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.green2};
  border: none;
  border-radius: 30px;
  font-size: 3rem;
`;