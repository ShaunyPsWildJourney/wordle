import React, { useEffect, useCallback, useContext } from 'react'
import styled from 'styled-components';
import Key from './Key';
import {AppContext} from '../App';
import { fSize } from '../fonts&screen';

function Keyboard() {
  const { handleDelete, handleEnter, handleLetterAdd , disabledLetters} = useContext(AppContext);
  const keys1 = ['q','w','e','r','t','y','u','i','o','p'];
  const keys2 = ['a','s','d','f','g','h','j','k','l'];
  const keys3 = ['z','x','c','v','b','n','m'];

  // eslint-disable-next-line 
 const handleKeyboard = useCallback((event) => {
  if (event.key === 'Enter') {
    handleEnter();
  } else if (event.key === 'Backspace') {
    handleDelete();

  } else {
    keys1.forEach((key) => {
      if (event.key.toLowerCase() === key) {
        handleLetterAdd(key)
      }
    })
    keys2.forEach((key) => {
      if (event.key.toLowerCase() === key) {
        handleLetterAdd(key)
      }
    })
    keys3.forEach((key) => {
      if (event.key.toLowerCase() === key) {
        handleLetterAdd(key)
      }
    })
  }
 })

 useEffect(() => {
  document.addEventListener('keydown', handleKeyboard);
  return () => document.removeEventListener('keydown', handleKeyboard);
}, [handleKeyboard])



  return (
    <Wrapper onKeyDown={handleKeyboard}>
      <Keys>
        <Keyrow>
          {keys1.map((item, index) => {
            return <Key key={index} keyVal={item} disabled={disabledLetters.includes(item)}/>
          })}
        </Keyrow>
        <Keyrow>
          {keys2.map((item, index) => {
            return <Key key={index+12}  keyVal={item} disabled={disabledLetters.includes(item)}/>
          })}
        </Keyrow>
        <Keyrow>
          <Key keyVal={'ENT'} bigKey/>
          {keys3.map((item, index) => {
            return <Key  key={index + 24}  keyVal={item} disabled={disabledLetters.includes(item)}/>
          })}
          <Key keyVal={'DEL'} bigKey/>
        </Keyrow>
      </Keys>
    </Wrapper>
  )
}

export default Keyboard



const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-bottom: 2rem;
  ${fSize.laptop}{
    max-width: 600px;
  }
`;
const Keys = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${fSize.large};
  width: 92%;
`;
const Keyrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
`;

