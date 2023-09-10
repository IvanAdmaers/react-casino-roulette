import React, { useEffect, useState, useRef } from 'react';
import type { FC } from 'react';

import config from '../../config/table.json';
import { getWheelNumbers } from '../../helpers';
import { classNames } from '../../libs';

import './RouletteWheel.css';

const availableWinningBets = [
  ...config['1_TO_18'],
  ...config['19_TO_36'],
  ...['-1', '0', '00'],
].map((bet) => `${bet}`);

export interface IRouletteWheelProps {
  start: boolean;
  winningBet: (typeof availableWinningBets)[number];
  onSpinningEnd?: () => void;
  withAnimation?: boolean;
  addRest?: boolean;
}

export const RouletteWheel: FC<IRouletteWheelProps> = ({
  start,
  winningBet,
  onSpinningEnd,
  withAnimation,
  addRest,
}) => {
  const [wheelNumbers, setWheelNumbers] = useState<string[]>([]);

  const innerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setWheelNumbers(getWheelNumbers());
  }, []);

  useEffect(() => {
    const currentInnerRef = innerRef.current;

    if (winningBet === '-1' || currentInnerRef === null || start === false) {
      return;
    }

    if (addRest === true) {
      currentInnerRef.classList.remove('rest');
    }

    currentInnerRef.removeAttribute('data-spintoindex');

    const betIndex = wheelNumbers.indexOf(winningBet);

    setTimeout(() => {
      currentInnerRef.setAttribute('data-spintoindex', `${betIndex}`);

      setTimeout(() => {
        if (addRest === true) {
          currentInnerRef.classList.add('rest');
        }

        onSpinningEnd?.();
      }, 9000);
    }, 100);
    // we're ignoring only the onSpinningEnd onSpinningEnd dep
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winningBet, start]);

  return (
    <div className="roulette-wheel-container">
      <div
        className={classNames('roulette-wheel-plate', {
          'with-animation': withAnimation,
        })}
      >
        <ul className="roulette-wheel-inner" ref={innerRef}>
          {wheelNumbers.map((number) => (
            <li
              key={`wheel-${number}`}
              data-bet={number}
              className="roulette-wheel-bet-number"
            >
              <label htmlFor={`wheel-pit-${number}`}>
                <input
                  type="radio"
                  name="pit"
                  id={`wheel-pit-${number}`}
                  defaultValue={number}
                />
                <span className="roulette-wheel-pit">{number}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

RouletteWheel.defaultProps = {
  onSpinningEnd: () => undefined,
  withAnimation: true,
  addRest: true,
};
