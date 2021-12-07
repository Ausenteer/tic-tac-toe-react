import React from 'react';
import ModalWrapper from '../assets/ModalWrapper';

interface IModal {
  active: boolean,
  setActive: (is: boolean) => void;
  children: any,
}

const Modal:React.FC<IModal> = ({ active, setActive, children }) => (
  <ModalWrapper onClick={() => setActive(false)} active={active}>
    <div>
      {children}
    </div>
  </ModalWrapper>
);

export default Modal;
