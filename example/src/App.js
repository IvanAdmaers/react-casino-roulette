/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { RouletteTable, RouletteWheel } from 'react-casino-roulette';
import 'react-casino-roulette/dist/index.css';

import { getRandomInt } from './utills';
import { getRandomRouletteWinBet } from './helpers';
import whiteChip from '../public/images/chips/white-chip.png';
import blueChip from '../public/images/chips/blue-chip.png';
import blackChip from '../public/images/chips/black-chip.png';
import cyanChip from '../public/images/chips/cyan-chip.png';

import './App.css';

const API = {
  getRandomBet: async () => {
    return getRandomRouletteWinBet();
  },
};

const chipsMap = {
  whiteChip: {
    icon: whiteChip,
    value: 1,
  },
  blueChip: {
    icon: blueChip,
    value: 10,
  },
  blackChip: {
    icon: blackChip,
    value: 100,
  },
  cyanChip: {
    icon: cyanChip,
    value: 500,
  },
};

const calcTotalBet = (bets) =>
  Object.entries(bets).reduce((acc, [, value]) => acc + value.number, 0);

export const App = () => {
  const [bets, setBets] = useState({});
  const [betHistory, setBetHistory] = useState([]);
  const [isDebug, setIsDebug] = useState(false);
  const [activeChip, setActiveChip] = useState(Object.keys(chipsMap)[0]);
  const [shouldShowData, setShouldShowData] = useState(false);

  const [isRouletteWheelSpinning, setIsRouletteWheelSpinning] = useState(false);
  const [rouletteWheelStart, setRouletteWheelStart] = useState(false);
  const [rouletteWheelBet, setRouletteWheelBet] = useState('-1');

  useEffect(() => {
    const backgroundIndex = getRandomInt(0, 5);
    const backgroundClass = `bg-${backgroundIndex}`;

    document.body.classList.add(backgroundClass);

    return () => {
      document.body.classList.remove(backgroundClass);
    };
  }, []);

  // you are here for
  useEffect(() => {
    if (rouletteWheelBet === '-1' || rouletteWheelStart === true) {
      return;
    }

    setRouletteWheelStart(true);
  }, [rouletteWheelBet, rouletteWheelStart]);

  useEffect(() => {
    if (isRouletteWheelSpinning === false) {
      return;
    }

    const prepare = async () => {
      const bet = await API.getRandomBet();
      console.info('gotta win bet', bet);

      setRouletteWheelStart(false);
      setRouletteWheelBet(bet);
    };

    prepare();
  }, [isRouletteWheelSpinning]);

  const handleDoSpin = () => {
    setIsRouletteWheelSpinning(true);
  };

  const handleEndSpin = () => {
    setIsRouletteWheelSpinning(false);
  };
  // end you are here for

  const undoLastBet = () => {
    if (betHistory.length === 0) {
      console.error('Nothing to undo');
      return;
    }

    setBets((prevState) => {
      const state = JSON.parse(JSON.stringify(prevState));

      const lastBet = betHistory[betHistory.length - 1];
      const prevIcon = betHistory[betHistory.length - 2]?.icon;

      const { id: lastBetId, value } = lastBet;

      if (state[lastBetId].number === 1) {
        delete state[lastBetId];
        return state;
      }

      state[lastBetId].icon = prevIcon;
      state[lastBetId].number -= value;

      return state;
    });

    setBetHistory((prevState) => prevState.slice(0, -1));
  };

  const cleanAllBets = () => {
    setBetHistory([]);
    setBets({});
  };

  const addBet = (id) => {
    const { icon, value } = chipsMap[activeChip];

    setBetHistory((prevState) => [...prevState, { id, icon, value }]);

    setBets((prevState) => {
      const state = JSON.parse(JSON.stringify(prevState));

      if (state[id] !== undefined) {
        state[id] = {
          ...state[id],
          icon,
          number: state[id].number + value,
        };
        return state;
      }

      state[id] = {
        icon,
        number: value,
      };

      return state;
    });
  };

  const changeIsDebug = () => setIsDebug((prevState) => !prevState);

  const handleOnBet = ({ bet, payload, id }) => {
    console.info(
      'handleOnBet',
      `bet ===> ${bet}`,
      'payload ===>',
      payload,
      'id ===> ',
      id,
    );

    addBet(id);
  };

  const handleChipChange = (event) => {
    const chipName = event.target.closest('[data-name]').dataset.name;

    setActiveChip(chipName);
  };

  const handleShowData = () => {
    setShouldShowData((prevState) => !prevState);
  };

  const totalBet = calcTotalBet(bets);

  return (
    <div>
      <h1 className="heading">React Casino Roulette</h1>
      <div className="roulette-wheel-wrapper">
        <RouletteWheel
          start={rouletteWheelStart}
          winningBet={rouletteWheelBet}
          onSpinningEnd={handleEndSpin}
        />
        <div className="buttons">
          <button
            type="button"
            disabled={isRouletteWheelSpinning}
            onClick={handleDoSpin}
          >
            Let&apos;s go
          </button>
          {/* <button type="button" onClick={handleDoSpin}>
            Spin
          </button> */}
        </div>
      </div>
      <div className="roulette-wrapper">
        <RouletteTable onBet={handleOnBet} bets={bets} isDebug={isDebug} />
        <div className="menu">
          <ul className="chips">
            {Object.entries(chipsMap).map(([name, { icon }]) => (
              <li
                key={name}
                data-name={name}
                className={activeChip === name ? 'active' : ''}
                onClick={handleChipChange}
              >
                <img width={64} height={64} src={icon} alt="chip" />
              </li>
            ))}
          </ul>
          <div className="score">
            <p>Total bet: {totalBet}</p>
          </div>
          <div className="buttons">
            <button type="button" onClick={undoLastBet}>
              Undo
            </button>
            <button type="button" onClick={cleanAllBets}>
              Clean
            </button>
            <button type="button" onClick={changeIsDebug}>
              Debug
            </button>
            <button type="button" onClick={handleShowData}>
              {shouldShowData === false ? 'Show' : 'Hide'} data
            </button>
          </div>
        </div>
        <div>
          {shouldShowData === true && (
            <p className="data">{JSON.stringify(bets, null, 2)}</p>
          )}
        </div>
        <div style={{ height: 50 }} />
      </div>
    </div>
  );
};
