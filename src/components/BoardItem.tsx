import React from 'react';
import Square from '../assets/Square';
import { TPlayers } from '../types/types';
import { checkWin2 } from '../store/helpers/checkWin';

interface BoardItemProps {
  value: TPlayers,
  row: number,
  col: number,
  onClick: (row: number, col: number) => void
}

const BoardItem:React.FC<BoardItemProps> = ({
  value,
  row,
  col,
  onClick,
}) => {
  const handleClickSquare = () => {
    onClick(row, col);
    const check = checkWin2(row, col, 3);
    check();
  };
  return (
    <Square
      tabIndex={0}
      role="button"
      onClick={handleClickSquare}
      player={value}
    >
      {value}
    </Square>
  );
};

export default React.memo(BoardItem);
