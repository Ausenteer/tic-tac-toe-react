import styled from 'styled-components/macro';
import { colorPlayerO, colorPlayerX } from './variables';

const getColor = (winner: string) => {
  let color;
  if (winner === 'X') {
    color = colorPlayerX;
  } else if (winner === 'O') {
    color = colorPlayerO;
  } else {
    color = `linear-gradient(
        120deg, ${colorPlayerX}, ${colorPlayerO})`;
  }
  return color;
};
const ModalButton = styled.button<{ winner: string }>`
  width: 450px; 
  background: ${(props) => getColor(props.winner)};
  padding: 20px;
  border-radius: 10px;
  font-size: 26px;
  color: white;
  
  @media (max-width: 400px) {
    width: 350px;
  }
`;

export default ModalButton;
