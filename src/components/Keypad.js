import styled from 'styled-components';
import {useState, useEffect } from 'react';
import  alphabet  from '../data/db';
import { fSize } from '../hooks/fonts&screen';


export default function Keypad(props) {
  const [letter, setLetter] = useState(null);
  const [ green, setGreen ] = useState('');
  const [ orange, setOrange ] = useState('');
  const { getLetter, handleDelete, handleSubmit , lettersPicked , solution, latestWordle, gameNumber} = props;

  useEffect(() => {
    setLetter(alphabet.letters)
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



  return (
      <Wrapper>
        <Keys>
          <Parameters onClick={handleDelete}>del</Parameters>
          {letter && letter.map((item, index) => {
            return <KeyLetter onClick={() => getLetter(item.key)} 
                              key={index}
                              style={{backgroundColor: //COLOR MATCHING
                                        lettersPicked.includes(item.key) 
                                        ? orange.includes(item.key)
                                        ? green.includes(item.key) ? 'lightgreen' : 'orange' : '#595959' : 'lightgrey'
                                      }}


                              // onKeyPress={charPress === item.key ? console.log(`success ${item.key}`) : null}
                              >
                                {item.key}
                   </KeyLetter>
          })}
        </Keys>
        <Parameters onClick={handleSubmit}
                    style={{minWidth: '4rem',}}>Enter</Parameters>
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
  height: 45%;
`;
const Keys = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${fSize.large};
`;
const KeyLetter = styled.div`
  height: 15%;
  width: 10%;  
  min-width: 2.5rem;
  min-height: 2.5rem;
  margin: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;  
  border-radius: 8px;
  background-color: lightgrey;
  cursor: pointer;
  &:active {
    box-shadow: inset 3px 3px 3px black;
  }
`;
const Parameters = styled.button`
  height: 15%;
  width: 10%;  
  min-width: 2.5rem;
  min-height: 2.5rem;
  margin: 0.2rem;
  text-align: center;
  ${fSize.large};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: lightgreen;
  }
  &:active {
    box-shadow: inset 3px 3px 3px black;
  }
`;
