import React from 'react'
import styled from 'styled-components';
import Letter from './Letter';
import { fSize } from '../fonts&screen';

function Board() {


  return (
    <Wrapper>
        <Row>
          <Letter letterPos={0} attemptVal={0} />
          <Letter letterPos={1} attemptVal={0} />
          <Letter letterPos={2} attemptVal={0} />
          <Letter letterPos={3} attemptVal={0} />
          <Letter letterPos={4} attemptVal={0} />
        </Row>
        <Row>
          <Letter letterPos={0} attemptVal={1} />
          <Letter letterPos={1} attemptVal={1} />
          <Letter letterPos={2} attemptVal={1} />
          <Letter letterPos={3} attemptVal={1} />
          <Letter letterPos={4} attemptVal={1} />
        </Row>
        <Row>
          <Letter letterPos={0} attemptVal={2} />
          <Letter letterPos={1} attemptVal={2} />
          <Letter letterPos={2} attemptVal={2} />
          <Letter letterPos={3} attemptVal={2} />
          <Letter letterPos={4} attemptVal={2} />
        </Row>
        <Row>
          <Letter letterPos={0} attemptVal={3} />
          <Letter letterPos={1} attemptVal={3} />
          <Letter letterPos={2} attemptVal={3} />
          <Letter letterPos={3} attemptVal={3} />
          <Letter letterPos={4} attemptVal={3} />
        </Row>
        <Row>
          <Letter letterPos={0} attemptVal={4} />
          <Letter letterPos={1} attemptVal={4} />
          <Letter letterPos={2} attemptVal={4} />
          <Letter letterPos={3} attemptVal={4} />
          <Letter letterPos={4} attemptVal={4} />
        </Row>
        <Row>
          <Letter letterPos={0} attemptVal={5} />
          <Letter letterPos={1} attemptVal={5} />
          <Letter letterPos={2} attemptVal={5} />
          <Letter letterPos={3} attemptVal={5} />
          <Letter letterPos={4} attemptVal={5} />
        </Row>

    </Wrapper>
  )
}

export default Board


const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  flex-grow: 1;
  padding-bottom: 2rem;
  &:first-child {
    padding-top: 2rem;
  }
  ${fSize.laptop}{
    max-width: 600px;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 92%;
  height: auto;
  flex: 1;
`;
