import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import checkWin from './helpers';

interface Cell {
  row: number,
  col: number,
}
type GameState = {
  board: string[][],
  test: string,
  currentMove: 'X' | 'O',
  winner: string,
  countStep: number,
};
const initialState: GameState = {
  board: Array(3).fill(Array(3).fill('')),
  test: 'test',
  currentMove: 'X',
  winner: '',
  countStep: 0,
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
        } else {
          state.currentMove = nextMove;
        }
      }
    },
    startNewGame: () => ({ ...initialState }),
  },
});

export const { setSymbol, startNewGame } = gameSlice.actions;

export default gameSlice.reducer;
