import React from 'react';
import GlobalStyle from './assets/GlobalStyle';
import './App.css';
import Container from './assets/Container';
import AppHeader from './components/AppHeader';
import NumberWins from './components/NumberWins';
import BoardGame from './components/BoardGame';
import InfoGame from './components/InfoGame';
import ModalWinner from './components/ModalWinner';

const App:React.FC = () => (
  <>
    <GlobalStyle />
    <AppHeader />
    <Container>
      <NumberWins />
      <InfoGame />
      <BoardGame />
      <ModalWinner />
    </Container>
  </>
);

export default App;
