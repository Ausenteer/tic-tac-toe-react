import styled from 'styled-components/macro';

const Button = styled.button`
  width: 450px;
  background-color: darkgrey;
  padding: 20px;
  border-radius: 10px;
  font-size: 30px;
  color: black;
  
  @media (max-width: 400px) {
    width: 350px;
  }
`;

export default Button;
