import styled from 'styled-components/macro';
import { TPlayers } from '../types/types';
import { colorPlayerX, colorPlayerO } from './variables';

const setColor = (player: TPlayers | '') => {
  if (!player) return '#fff';
  return player === 'X' ? colorPlayerX : colorPlayerO;
};
const Square = styled.div<{ player: TPlayers | '' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  cursor: pointer;
  background-color: #fff;
  color: ${(props) => setColor(props.player)};
  border-radius: 10px;
`;

export default Square;
