import styled from 'styled-components/macro';

const NumberWinsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  font-size: 22px;
  margin-bottom: 15px;
  text-align: end;
  
  p {
    padding: 4px;
  }
  p:nth-child(1) {
    background-color: tomato;
    color: white;
    border-radius: 4px;
  }
  p:nth-child(3) {
    background-color: cornflowerblue;
    color: white;
    border-radius: 4px;
  }
`;

export default NumberWinsWrapper;
