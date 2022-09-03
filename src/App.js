import styled from 'styled-components';
import Keypad from './components/Keypad';
import Words from './components/Words';
import { useState, useEffect } from 'react'; 
import  solution  from './data/db';
import Winner from './components/Winner';
import Loser from './components/Loser';
import { screenSize } from './hooks/fonts&screen';
import {useWindowHeight} from '@react-hook/window-size'

function App() {
  const [arrayTally, setArrayTally ] = useState(0);
  const [letterArray, setLetterArray ] = useState(['']); 
  const [arrayCounter , setArrayCounter ] = useState(0);
  const [ wordle , setWordle ] = useState([]);
  const [ lettersPicked, setLettersPicked ] = useState('');
  const [ latestWordle, setLatestWordle ] = useState('');
  const [answer, setAnswer] = useState(null);
  const [winner , setWinner ] = useState(false);
  const [ gameNumber, setGameNumber ] = useState(0);
  const [char, setChar ] = useState('')
  const [kikiCode, setKeyCode ] = useState('')
  const onlyHeight = useWindowHeight()


  useEffect(() => {
    setAnswer(solution.solutions)
  }, [])

  // KEYBOARD KEYS AND BACKSPACE ENTER
  useEffect(() => {
    function handleKeyDown(e) {
      let helper = e.key;
      setChar(helper);
      let helper2 = e.key;
      setKeyCode(helper2);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);

  }, [letterArray]);

  // HACK THE LETTERS INTO THE ARRAY AND ADD ENTER AND BACKSPACE
  useEffect(() => {
    if (char.match(/[a-z]/)){
      getLetter(char);
    }
  // eslint-disable-next-line 
  }, [char])
  useEffect(() => {
    if (kikiCode === 'Enter') {
      handleSubmit()
    }
    if (kikiCode === 'Backspace') {
      handleDelete()
    }
  // eslint-disable-next-line 
  }, [kikiCode ])
  


  //RETRIEVE LETTERS TYPED 
  function getLetter(digit) {
    if (arrayCounter < 5) {
      let preventArray = (letterArray + digit ) 
                        .toString()
                        .replaceAll(/,/g, '');
      setLetterArray(preventArray)
      setArrayCounter(arr => arr + 1)
    } else {
  // REPLACE FINAL LETTER
      let helper = [...letterArray]
      helper.pop();
      helper.push(digit)
      setLetterArray(helper)
    }
  }

  //DELETE LETTER AND RETURN STRING 
  function handleDelete() {
    let preventArray = ([...letterArray]
                          .slice(0,-1))
                          .toString()
                          .replaceAll(/,/g, '');
    setLetterArray([...preventArray]);
    setArrayCounter(arr => arr - 1)
  }

  function handleSubmit() {
    if (arrayCounter === 5) {
      setLettersPicked(prev => prev += letterArray)
      setLatestWordle([...letterArray])
      setArrayCounter(0);
      setArrayTally(prev => prev + 1);
      setWordle(current => [...current, letterArray])
      setLetterArray('');
    }
  }

  useEffect(() => {
    if (latestWordle) {
      if (latestWordle.join().replaceAll(',','') === [solution.solutions[gameNumber]].join()) {
        setWinner(true)}
    }
  }, [latestWordle, gameNumber])

  function handleReset() {
    setLettersPicked('');
    setLatestWordle('');
    setArrayTally(0);
    setWordle('');
    setWinner(false);
    setGameNumber(prev => prev + 1);
  }


  return (
  <Wrapper style={{height: `${onlyHeight}px`}}
            >
    <Container>

    <Title>'Swear'dle</Title>
      {winner && <Winner handleReset={handleReset} arrayTally={arrayTally}/>}
      {arrayTally === 6 && !winner && 
      <Loser 
            solution={solution}
            handleReset={handleReset}
            />}

      <Words letterArray={letterArray}
              arrayTally={arrayTally}
              answer={answer}
              wordle={wordle}
              gameNumber={gameNumber}
      />
      <Keypad getLetter={getLetter}
              handleDelete={handleDelete}
              handleSubmit={handleSubmit}
              lettersPicked={lettersPicked}
              answer={answer}
              solution={solution}
              latestWordle={latestWordle}
              gameNumber={gameNumber}
              letterArray={letterArray}
      />
    </Container>
  </Wrapper>  
  );
}

export default App;

const Wrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: #f9de56; */
`;
const Container = styled.div`
  height:100%;
  width: 50%;
  min-width: 300px;
  min-height: 600px;
  /* border: 1px solid black; */
  /* border-radius: 30px; */
  background-color: white;
  ${screenSize.mobile}{
    width: 100%;
    border-radius: 0px;
  }
  ${screenSize.tablet}{
    width: 80%;
  }
  ${screenSize.laptop}{
    width: 50%;
  }
`;
const Title = styled.h1`
  height: 10%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: black;
  border-radius: 20px;

`;

