import styled from 'styled-components/macro';
import { mainColor } from './variables';

const InfoGameWrapper = styled.div`
  display: flex;
  background-color: ${mainColor};
  padding: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  
  p:last-child {
    margin-left: 5px;
    width: 23px;
  }
`;

export default InfoGameWrapper;
