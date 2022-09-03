import styled from 'styled-components';
import { fSize, colors } from '../hooks/fonts&screen';

export default function Keypad(props) {
  const { letterArray , arrayTally, answer, wordle, gameNumber } = props;

  return (
    <Wrapper>
        {wordle[0] && //CHECK IF ARRAY HAS BEGUN
          [...wordle].map((item, index) => //GET INDEX TO MAP OUT NEW ROWS
            <Row key={index}>

              {answer &&  [...wordle[index]].map((item, index) => { // ADD SUBMITTED WORD PERMANENTLY
                return <Turns key={index} 
                              style={{backgroundColor : answer[gameNumber].includes(item) ? 
                                                        answer[gameNumber][index] === item ? `${colors.green2}` : `${colors.orange2}`
                                                        : `${colors.grey2}`}}>
                              {item}
                      </Turns>}
            )} 
            </Row>
          )
        } 
       
        {arrayTally < 6 && <Row>
          <Turns>{letterArray[0]}</Turns>
          <Turns>{letterArray[1]}</Turns>
          <Turns>{letterArray[2]}</Turns>
          <Turns>{letterArray[3]}</Turns>
          <Turns>{letterArray[4]}</Turns>
        </Row>
        }
    </Wrapper>
  )
}


const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 44%;
  &:first-child {
    padding-top: 2rem;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
`;
const Turns = styled.div`
  height: 15%;
  width: 15%;  
  min-width: 2.5rem;
  min-height: 2.5rem;
  margin: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${fSize.large};
  border-radius: 4px;
  border: 1px solid lightgrey;
  font-size: 1.5rem;
`;