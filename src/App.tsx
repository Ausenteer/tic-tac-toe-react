import React from 'react';
import { useAppDispatch, useAppSelector } from './hooks/useReduxStore';
import gameSelector from './store/selectors/gameSelector';
import GlobalStyle from './assets/GlobalStyle';
import './App.css';
import Container from './assets/Container';
import AppHeader from './components/AppHeader';
import BoardWrapper from './assets/BoardWrapper';
import Square from './assets/Square';
import Button from './assets/Button';
import { setSymbol, startNewGame } from './store/gameSlice';

const App:React.FC = () => {
  const { board, currentMove, winner } = useAppSelector(gameSelector);
  const dispatch = useAppDispatch();
  const handleSetSymbol = (rowId: number, index: number) => {
    if (!winner) {
      dispatch(setSymbol({ row: rowId, col: index }));
    }
  };
  const boardGame = board.map((row, rowIndex) => row.map((value, colIndex) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <Square tabIndex={0} role="button" onClick={() => handleSetSymbol(rowIndex, colIndex)}>{value}</Square>
  )));
  const result = winner ? `Победили ${winner}` : null;
  return (
    <>
      <GlobalStyle />
      <AppHeader />
      <Container>
        <p>
          Кто ходит:
          {currentMove}
        </p>
        <BoardWrapper>
          {boardGame}
        </BoardWrapper>
        <Button role="button" onClick={() => dispatch(startNewGame())}>НОВАЯ ИГРА</Button>
        {result}
      </Container>
    </>
  );
};

export default App;
