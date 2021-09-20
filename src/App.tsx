import React from 'react';
import { useAppDispatch, useAppSelector } from './hooks/useReduxStore';
import gameSelector from './store/selectors/gameSelector';
import GlobalStyle from './assets/GlobalStyle';
import './App.css';
import Container from './assets/Container';
import AppHeader from './components/AppHeader';
import Button from './assets/Button';
import { startNewGame } from './store/gameSlice';
import BoardGame from './components/BoardGame';

const App:React.FC = () => {
  const { currentMove, winner } = useAppSelector(gameSelector);
  const dispatch = useAppDispatch();
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
        <BoardGame />
        <Button role="button" onClick={() => dispatch(startNewGame())}>НОВАЯ ИГРА</Button>
        {result}
      </Container>
    </>
  );
};

export default App;
