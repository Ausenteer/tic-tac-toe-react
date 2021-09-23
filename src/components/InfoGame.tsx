import React from 'react';
import { useAppSelector } from '../hooks/useReduxStore';
import gameSelector from '../store/selectors/gameSelector';
import InfoGameWrapper from '../assets/InfoGameWrapper';

const InfoGame:React.FC = () => {
  const { currentMove } = useAppSelector(gameSelector);
  return (
    <InfoGameWrapper>
      <p>
        Кто ходит:
      </p>
      <p>
        {currentMove}
      </p>
    </InfoGameWrapper>
  );
};

export default InfoGame;
