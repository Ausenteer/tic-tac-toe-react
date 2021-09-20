import styled from 'styled-components/macro';
import { mainColor } from './variables';

const BoardWrapper = styled.div`
  width: 450px;
  height: 450px;
  margin: 0 auto;
  background-color: ${mainColor};
  color: #000;
  border: 6px solid ${mainColor};
  border-radius: 10px;
  display: grid;
  grid-template: repeat(3,1fr)/repeat(3,1fr);
`;

export default BoardWrapper;
