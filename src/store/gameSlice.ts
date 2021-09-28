import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import checkWin from './helpers/checkWin';
import counterWins from './helpers/counterWins';

interface Cell {
  row: number,
  col: number,
}
type GameState = {
  board: string[][],
  currentMove: 'X' | 'O',
  winner: string,
  countStep: number,
  numberWins: {
    X: number,
    O: number,
  }
};
const initialState: GameState = {
  board: Array(3).fill(Array(3).fill('')),
  currentMove: 'X',
  winner: '',
  countStep: 0,
  numberWins: {
    X: 0,
    O: 0,
  },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setSymbol: (state, action: PayloadAction<Cell>) => {
      const { row, col } = action.payload;
      state.countStep += 1;
      if (state.board[row][col] === '') {
        const nextMove = state.currentMove === 'X' ? 'O' : 'X';
        state.board[row][col] = state.currentMove;
        const winSymbol = checkWin(state.board, state.currentMove);
        if (winSymbol) {
          state.winner = winSymbol;
          state.numberWins = counterWins(winSymbol, state.numberWins);
        } else {
          state.currentMove = nextMove;
        }
      }
    },
    startNewGame: (state) => {
      state.board = initialState.board;
      state.currentMove = initialState.currentMove;
      state.winner = initialState.winner;
      state.countStep = initialState.countStep;
    },
  },
});

export const { setSymbol, startNewGame } = gameSlice.actions;

export default gameSlice.reducer;
