import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useReduxStore';
import gameSelector from '../store/selectors/gameSelector';
import BoardWrapper from '../assets/BoardWrapper';
import { setSymbol, startNewGame } from '../store/gameSlice';
import ResetButton from '../assets/ResetButton';
import BoardItem from './BoardItem';
import { TPlayers } from '../types/types';

const BoardGame:React.FC = () => {
  const { board, winner } = useAppSelector(gameSelector);
  const dispatch = useAppDispatch();
  const handleSetSymbol = useCallback((row: number, col: number) => {
    if (!winner) {
      dispatch(setSymbol({ row, col }));
    }
  }, [winner]);
  const boardGame = board.map((row, rowIndex) => row.map((value, colIndex) => (
    <BoardItem
      onClick={handleSetSymbol}
      value={value as TPlayers}
      row={rowIndex}
      col={colIndex}
    />
  )));
  const handleResetClick = () => {
    dispatch(startNewGame());
  };
  return (
    <>
      <BoardWrapper>
        {boardGame}
      </BoardWrapper>
      <ResetButton role="button" onClick={handleResetClick}>НОВАЯ ИГРА</ResetButton>
    </>
  );
};

export default BoardGame;
