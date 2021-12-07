import styled from 'styled-components/macro';

const BoardWrapper = styled.div`
  width: 450px;
  height: 450px;
  color: #000;
  display: grid;
  grid-template: repeat(3,1fr)/repeat(3,1fr);
  font-size: 45px;
  margin-top: 15px;
  margin-bottom: 15px;
  
  @media (max-width: 400px) {
    width: 350px;
    height: 350px;
  }
`;

export default BoardWrapper;
