import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useAppSelector } from '../hooks/useReduxStore';
import gameSelector from '../store/selectors/gameSelector';
import Modal from './Modal';
import ModalButton from '../assets/ModalButton';
import createText from '../utils/createText';

const ModalWinner:React.FC = () => {
  const { winner } = useAppSelector(gameSelector);
  const [activeModal, setActiveModal] = useState(false);
  useEffect(() => {
    if (winner) {
      setActiveModal(true);
    }
  }, [winner]);
  const text = createText(winner);
  const confetti = winner && (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
  return (
    <>
      <Modal active={activeModal} setActive={setActiveModal}>
        <p>{text}</p>
        <ModalButton winner={winner} role="button" onClick={() => setActiveModal(false)}>УРА!</ModalButton>
      </Modal>
      {confetti}
    </>
  );
};

export default ModalWinner;
