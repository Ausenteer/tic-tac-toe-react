import styled from 'styled-components/macro';
import { TPlayers } from '../types/types';
import setColor from '../utils/setColor';

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
