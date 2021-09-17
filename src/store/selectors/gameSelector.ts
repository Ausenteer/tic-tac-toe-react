import { RootState } from '../configureStore';

const gameSelector = (state: RootState) => {
  const { board, currentMove, winner } = state;
  return {
    board,
    currentMove,
    winner,
  };
};

export default gameSelector;
