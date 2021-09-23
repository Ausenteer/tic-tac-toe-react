import styled from 'styled-components/macro';
import { mainColor } from './variables';

const BoardWrapper = styled.div`
  width: 450px;
  height: 450px;
  background-color: ${mainColor};
  color: #000;
  border: 6px solid ${mainColor};
  border-radius: 10px;
  display: grid;
  grid-template: repeat(3,1fr)/repeat(3,1fr);
  
  @media (max-width: 480px) {
    width: 350px;
    height: 350px;
  }
`;

export default BoardWrapper;
