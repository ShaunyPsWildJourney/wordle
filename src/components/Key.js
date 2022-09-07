import React, {useContext } from 'react'
import styled from 'styled-components';
import {AppContext} from '../App';
import { screenSize , colors } from '../fonts&screen';

function Key({ keyVal, bigKey, disabled }) {
  const { handleDelete, handleEnter, handleLetterAdd } = useContext(AppContext);

  function selectLetter() {
    if (keyVal === 'ENT') {
      handleEnter()
    } 
    else if (keyVal === 'DEL') {
      handleDelete()
    } 
    else { 
      handleLetterAdd(keyVal)
    }
  }

  return (
    <KeySolo style={{width: bigKey && '3rem',
                      backgroundColor: disabled ? `${colors.grey5}` : `${colors.grey1}`
                      }}
              onClick={selectLetter}
    >
      {keyVal.toUpperCase()}
    </KeySolo>
  )
}

export default Key



const KeySolo = styled.div`
  min-width: 1.5rem;  
  height: 4.6rem;
  margin: 0.5rem 0.2rem 0.2rem;
  display: flex;
  flex-grow: 0.1;
  justify-content: center;
  align-items: center;  
  flex-direction: row;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid ${colors.grey3};
  background-color: white;
  font-weight: 500;
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
