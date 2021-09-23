import styled from 'styled-components/macro';
import { mainColor } from './variables';

const Button = styled.button`
  width: 450px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: ${mainColor};
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 480px) {
    width: 350px;
  }
`;

export default Button;
