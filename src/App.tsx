import React from 'react';
import GlobalStyle from './assets/GlobalStyle';
import './App.css';
import Container from './assets/Container';
import AppHeader from './components/AppHeader';
import BoardGame from './components/BoardGame';
import InfoGame from './components/InfoGame';

const App:React.FC = () => (
  <>
    <GlobalStyle />
    <AppHeader />
    <Container>
      <InfoGame />
      <BoardGame />
    </Container>
  </>
);

export default App;
