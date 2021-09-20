import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useReduxStore';
import gameSelector from '../store/selectors/gameSelector';
import BoardWrapper from '../assets/BoardWrapper';
import Square from '../assets/Square';
import { setSymbol } from '../store/gameSlice';

const BoardGame:React.FC = () => {
  const { board, winner } = useAppSelector(gameSelector);
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
  return (
    <BoardWrapper>
      {boardGame}
    </BoardWrapper>
  );
};

export default BoardGame;
