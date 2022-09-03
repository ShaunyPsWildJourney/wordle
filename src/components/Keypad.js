import styled from 'styled-components';
import {useState, useEffect  } from 'react';
import  alphabet  from '../data/db';
import { fSize, screenSize, colors } from '../hooks/fonts&screen';


export default function Keypad(props) {
  const [letter, setLetter] = useState(null);
  const [letter2, setLetter2] = useState(null);
  const [letter3, setLetter3] = useState(null);
  const [ green, setGreen ] = useState('');
  const [ orange, setOrange ] = useState('');
  const { getLetter, handleDelete, handleSubmit , lettersPicked , 
          solution, latestWordle, gameNumber, letterArray  } = props;

  useEffect(() => {
    setLetter(alphabet.letters)
    setLetter2(alphabet.letters2)
    setLetter3(alphabet.letters3)
  }, [])
  
    useEffect(() => {
  if (lettersPicked) {
    // GET LETTER MATCHES REGARDLESS
    let helper = lettersPicked.split('').filter((item) => {
      return solution.solutions[gameNumber].includes(item);
    })
    // SET ORANGE LETTERS 
    setOrange(prev => prev += helper) 
  
    // SET GREEN LETTERS 
  let greenery = latestWordle.map((item,index) => {
    return (item === solution.solutions[gameNumber][index]) ? item : null;   
  })
  setGreen(prev => prev += greenery) 
  }
}, [lettersPicked, latestWordle, solution.solutions, gameNumber])

  function handleReset() {
    setOrange('');
    setGreen('');
  }

  return (
      <Wrapper>
        <Keys>
          <KeyContainer>
          {letter && letter.map((item, index) => {
            return <KeyLetter onClick={() => getLetter(item.key)} 
                              key={index}
                              style={{backgroundColor: //COLOR MATCHING
                                        lettersPicked.includes(item.key) 
                                        ? orange.includes(item.key)
                                        ? green.includes(item.key) ? `${colors.green2}` : `${colors.orange2}` : `${colors.grey5}` : `${colors.grey2}`
                                      }}>
                                {item.key}
                   </KeyLetter>
          })}
          </KeyContainer>
          <KeyContainer>
          {letter2 && letter2.map((item, index) => {
            return <KeyLetter onClick={() => getLetter(item.key)} 
                              key={index}
                              style={{backgroundColor: //COLOR MATCHING
                                        lettersPicked.includes(item.key) 
                                        ? orange.includes(item.key)
                                        ? green.includes(item.key) ? `${colors.green2}` : `${colors.orange2}` : `${colors.grey5}` : `${colors.grey2}`
                                      }}>
                                {item.key}
                   </KeyLetter>
          })}
          </KeyContainer>
          <KeyContainer>
            <Parameters onClick={handleDelete} disabled={letterArray.length === 0}>del</Parameters>

            {letter3 && letter3.map((item, index) => {
              return <KeyLetter onClick={() => getLetter(item.key)} 
                                key={index}
                                style={{backgroundColor: //COLOR MATCHING
                                          lettersPicked.includes(item.key) 
                                          ? orange.includes(item.key)
                                          ? green.includes(item.key) ? `${colors.green2}` : `${colors.orange2}` : `${colors.grey5}` : `${colors.grey2}`
                                        }}>
                                  {item.key}
                    </KeyLetter>
            })}
            <Parameters onClick={() => {handleSubmit(); handleReset()}}
                      style={{minWidth: '4rem',}}
                      disabled={letterArray.length !== 5}>Enter</Parameters>
          </KeyContainer>


        </Keys>



      </Wrapper>
  )
}


const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 35%;

`;
const Keys = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${fSize.large};
  width: 98%;
`;
const KeyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
`;
const KeyLetter = styled.div`
  height: 90%;
  width: 2rem;  
  height: 3.4rem;
  margin: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: row;
  border-radius: 8px;
  cursor: pointer;
  &:active {
    box-shadow: inset 3px 3px 3px black;
  }
  ${screenSize.tablet} {
    width: 2.8rem;  
  }
  ${screenSize.laptop} {
    width: 3.2rem;  
  }
`;

const Parameters = styled.button`
  width: 2rem;  
  height: 3.4rem;
  margin: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;  
  ${fSize.large};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  &:active {
    box-shadow: inset 3px 3px 3px black;
  }
  ${screenSize.tablet} {
    width: 2.8rem;  
  }
  ${screenSize.laptop} {
    width: 3.2rem;  
  }
`;
