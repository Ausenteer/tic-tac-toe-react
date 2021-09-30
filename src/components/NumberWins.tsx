import React from 'react';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../hooks/useReduxStore';
import NumberWinsWrapper from '../assets/NumberWinsWrapper';
import numberWinsSelector from '../store/selectors/numberWinsSelector';

const NumberWins:React.FC = () => {
  const { numberWins } = useAppSelector(numberWinsSelector, shallowEqual);
  return (
    <NumberWinsWrapper>
      <p>
        X:
      </p>
      <p>
        {numberWins.X}
      </p>
      <p>
        O:
      </p>
      <p>
        {numberWins.O}
      </p>
    </NumberWinsWrapper>
  );
};

export default NumberWins;
