import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import checkWin from './helpers/checkWin';
import { Cell, TPlayers, GameState } from '../types/types';

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
      const countSquare = state.board.length ** 2;
      if (state.board[row][col] === '') {
        const nextMove = state.currentMove === 'X' ? 'O' : 'X';
        state.board[row][col] = state.currentMove;
        const winSymbol: TPlayers | undefined = checkWin(state.board, state.currentMove);
        if (winSymbol) {
          state.winner = winSymbol;
          state.numberWins[winSymbol] += 1;
        } else {
          state.currentMove = nextMove;
        }
        if (state.countStep === countSquare && !state.winner) {
          state.winner = 'noWinner';
          state.numberWins.X += 1;
          state.numberWins.O += 1;
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
