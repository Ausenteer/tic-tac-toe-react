const checkLine = (array: string[], symbol: string, size: number) => {
  let winner;
  const filteredArray = array.filter((item) => item === symbol);
  if (filteredArray.length === size) {
    winner = symbol;
  }
  return winner;
};
const checkWin = (
  board: string[][],
  symbol: string,
) : string | undefined => {
  const { length } = board;
  const primaryDiagonal: string[] = [];
  const secondaryDiagonal: string[] = [];
  let column: string[] = [];

  let lineWinner: string | undefined;
  let secondaryDiagonalWinner: string | undefined;
  let primaryDiagonalWinner: string | undefined;
  let columnWinner: string | undefined;
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
