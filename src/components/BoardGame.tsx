import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useAppDispatch, useAppSelector } from '../hooks/useReduxStore';
import gameSelector from '../store/selectors/gameSelector';
import BoardWrapper from '../assets/BoardWrapper';
import Square from '../assets/Square';
import { setSymbol, startNewGame } from '../store/gameSlice';
import Button from '../assets/Button';
import Modal from './Modal';
import { TPlayers } from '../types/types';

const BoardGame:React.FC = () => {
  const { board, winner } = useAppSelector(gameSelector);
  const [activeModal, setActiveModal] = useState(false);
  useEffect(() => {
    if (winner) {
      setActiveModal(true);
    }
  }, [winner]);
  const dispatch = useAppDispatch();
  const handleSetSymbol = (rowId: number, index: number) => {
    if (!winner) {
      dispatch(setSymbol({ row: rowId, col: index }));
    }
  };
  const boardGame = board.map((row, rowIndex) => row.map((value, colIndex) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <Square
      tabIndex={0}
      role="button"
      onClick={() => handleSetSymbol(rowIndex, colIndex)}
      player={value as TPlayers}
    >
      {value}
    </Square>
  )));
  const text = `Победили ${winner}`;
  const confetti = winner && (
  <Confetti
    width={window.innerWidth}
    height={window.innerHeight}
  />
  );
  return (
    <>
      <BoardWrapper>
        {boardGame}
      </BoardWrapper>
      <Button role="button" onClick={() => dispatch(startNewGame())}>НОВАЯ ИГРА</Button>
      <Modal active={activeModal} setActive={setActiveModal}>
        <p>{text}</p>
      </Modal>
      {confetti}
    </>
  );
};

export default BoardGame;
