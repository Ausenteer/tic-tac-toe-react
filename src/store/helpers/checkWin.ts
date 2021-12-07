import { TPlayers } from '../../types/types';

export const checkWin2 = (r: number, c: number, size: number) => {
  const row: number[] = [0, 0, 0];
  const column: number[] = [0, 0, 0];
  const diag: number[] = [0, 0, 0];
  const antiDiag: number[] = [0, 0, 0];

  // eslint-disable-next-line func-names
  return function () {
    // eslint-disable-next-line operator-assignment
    row[r] = row[r] + 1;
    column[c] += column[c];
    if (r === c) diag[r] += diag[r];
    if (r + c === size) antiDiag[r] += antiDiag[r];
    console.log(row, r);
    return row[r] === size || column[c] === size
        || diag[r] === size || antiDiag[r] === size;
  };
};

const checkLine = (array: string[], symbol: TPlayers, size: number): TPlayers | undefined => {
  let winner;
  const filteredArray = array.filter((item) => item === symbol);
  if (filteredArray.length === size) {
    winner = symbol;
  }
  return winner;
};
const checkWin = (
  board: string[][],
  symbol: TPlayers,
) : TPlayers | undefined => {
  const { length } = board;
  const primaryDiagonal: string[] = [];
  const secondaryDiagonal: string[] = [];
  let column: string[] = [];

  let lineWinner: TPlayers | undefined;
  let secondaryDiagonalWinner: TPlayers | undefined;
  let primaryDiagonalWinner: TPlayers | undefined;
  let columnWinner: TPlayers | undefined;

  for (let i = 0; i < length; i += 1) {
    lineWinner = checkLine(board[i], symbol, length);
    if (lineWinner !== undefined) {
      break;
    }

    column = board.map((item) => item[i]);
    columnWinner = checkLine(column, symbol, length);
    if (columnWinner !== undefined) {
      break;
    }

    let temp = i;
    temp = length - 1 - temp;
    secondaryDiagonal.push(board[i][temp]);
    secondaryDiagonalWinner = checkLine(secondaryDiagonal, symbol, length);

    primaryDiagonal.push(board[i][i]);
    primaryDiagonalWinner = checkLine(primaryDiagonal, symbol, length);
  }
  return lineWinner || columnWinner || secondaryDiagonalWinner || primaryDiagonalWinner;
};

export default checkWin;
