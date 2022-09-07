import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { useState , createContext, useEffect} from 'react';
import { boardDefault } from "./Words";
import { generateWordSet } from "./Words";
import {  colors } from './fonts&screen';
import styled from "styled-components";
import { useWindowHeight, useWindowWidth } from '@react-hook/window-size'
import Gameover from "./components/Gameover";

export const AppContext = createContext();

function App() {
  const onlyHeight = useWindowHeight()
  const onlyWidth = useWindowWidth()
  const [ board, setBoard ] = useState(boardDefault)
  const [ currAttempt, setCurrAttempt ] = useState({attempt: 0, letterPos: 0});
  const [ correctWord, setCorrectWord ] = useState('');
  const [ wordSet, setWordSet] = useState(new Set());
  const [ disabledLetters, setDisabledLetters ] = useState([]); 
  const [ gameOver, setGameOver ] = useState({ 
    gameOver: false,
    guessedWord: false});

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet)
      setCorrectWord(words.todaysWord)
    })
  }, [])


  function handleEnter() {
    if (currAttempt.letterPos !== 5) return; 

    let currWord = '';
    for (let i =0; i < 5; i++ ) {
      currWord += board[currAttempt.attempt][i]
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0});
    } 
    if (currWord === correctWord) {
      setGameOver({gameOver: true, guessedWord: true})
      return;
    }
    if (currAttempt.attempt ===5) {
      setGameOver({gameOver: true, guessedWord: false})
    }
  }

  function handleDelete() {
    if (currAttempt.letterPos === 0 )return ; 
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1 ] = '';
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1})
  }

  function handleLetterAdd(keyVal) {
    if (currAttempt.letterPos > 4) return; 
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1});
  }

  function handleRetry() {
    setGameOver({
      gameOver: false,
      guessedWord: false
    })
    setBoard([
      new Array(5).fill(''),
      new Array(5).fill(''),
      new Array(5).fill(''),
      new Array(5).fill(''),
      new Array(5).fill(''),
      new Array(5).fill(''),
    ]);
    setDisabledLetters([]);
    setCurrAttempt({...currAttempt, attempt: 0})

    generateWordSet().then((words) => {
      setWordSet(words.wordSet)
      setCorrectWord(words.todaysWord)
    })

  }

  return (
    <Wrapper style={{height: `${onlyHeight}px`, width: `${onlyWidth}px`}}>

        <Header>'Swear'dle</Header>


      <AppContext.Provider value={{
                                  handleEnter,
                                  handleDelete,
                                  handleLetterAdd,
                                  board,
                                  setBoard,
                                  correctWord,
                                  currAttempt,
                                  setDisabledLetters,
                                  disabledLetters,
                                  gameOver,
                                  setGameOver,
                                  handleRetry,

                                  }}>
        {gameOver.gameOver && <Gameover />}
        <Board />
        <Keyboard />
      </AppContext.Provider>

    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
  height: 8%;
  min-height: 4.2rem;
  font-size: 3rem;
  font-weight: 600;
  text-decoration: underline;
  /* border-bottom: 6px ridge ${colors.green2} ; */
  /* box-shadow: 2px 2px 2px green; */
  
`;