import { TPlayers } from '../types/types';
import { colorPlayerO, colorPlayerX } from '../assets/variables';

const setColor = (player: TPlayers | '') => {
  if (!player) return '#fff';
  return player === 'X' ? colorPlayerX : colorPlayerO;
};

export default setColor;
