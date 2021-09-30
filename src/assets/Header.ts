import styled from 'styled-components/macro';
import { colorPlayerX, colorPlayerO } from './variables';

const Header = styled.header`
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-bottom: 40px;
  background: linear-gradient(
          120deg, ${colorPlayerX}, ${colorPlayerO});
`;

export default Header;
