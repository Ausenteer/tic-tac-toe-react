import { RootState } from '../configureStore';

const numberWinsSelector = (state: RootState) => {
  const { numberWins } = state;
  return { numberWins };
};

export default numberWinsSelector;
