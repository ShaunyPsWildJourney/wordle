import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import {AppContext} from '../App';
import { fSize, colors } from '../fonts&screen';

function Letter({letterPos, attemptVal}) {
  const { board , correctWord, currAttempt, setDisabledLetters } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  const [green , setGreen ] = useState(false);
  const [orange , setOrange ] = useState(false);

  const letterState = 
        currAttempt.attempt > attemptVal && 
        (green ? `${colors.green2}` : orange ? `${colors.orange2}` : `${colors.grey1}`);

   useEffect(() => {
    if (letter !== '' && !green && !orange ){
      setDisabledLetters(prev => [...prev, letter])
    }
    // eslint-disable-next-line 
   }, [currAttempt.attempt])    
   
   useEffect(() => {
    setGreen(correctWord[letterPos] === letter)
    setOrange(!green && letter !== '' && correctWord.includes(letter))
    // eslint-disable-next-line 
   }, [correctWord, letter] )



  return (
    <Let key={currAttempt.letterPos + currAttempt.attempt*5}
      style={{backgroundColor: `${letterState}`}}
      >{letter.toUpperCase()}</Let>
  )
}



export default Letter



const Let = styled.div`
  height: auto;
  width: auto;  
  min-width: 2.5rem;
  min-height: 2.5rem;
  margin: 0.2rem;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  ${fSize.large};
  border-radius: 4px;
  border: 1px solid lightgrey;
  background-color: white;
  font-size: 1.5rem;
  font-weight: 500;
`;