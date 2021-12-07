import styled from 'styled-components/macro';

const ModalWrapper = styled.div<{ active: boolean }>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  opacity: ${(props) => (props.active ? '1' : '0')};
  transition: 0.5s;
  pointer-events: ${(props) => (props.active ? 'all' : 'none')};;
  
  div {
    padding: 20px;
    border-radius: 12px;
    background-color: #fff;
    transform: ${(props) => (props.active ? 'scale(1)' : 'scale(0.5)')};
    transition: 0.4s all;
    font-size: 22px;
    
    p {
      font-weight: 600;
      text-align: center;
      margin: 15px;
    }
  }
`;

export default ModalWrapper;
