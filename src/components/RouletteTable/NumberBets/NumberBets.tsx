import React, { useContext } from 'react';
import type { FC } from 'react';

import { Chip } from '../Chip';
import { RouletteTableContext } from '../../../context';

import config from '../../../config/table.json';
import {
  shouldRenderBottomCatcher,
  shouldRenderChip,
  shouldRenderCornerBetCatcher,
  shouldRenderRightCatcher,
  shouldRenderSixLineBetCatcher,
  shouldRenderTopCatcher,
  shouldRenderTopRightDoubleStreetCatcher,
  shouldRenderTopStreetCatcher,
  findChipIcon,
} from '../../../helpers';
import { ACTION_TYPES } from '../../../constants';

export const NumberBets: FC = () => {
  const { onBetCatcherHover, bets } = useContext(RouletteTableContext);

  return (
    <>
      {Array.from({ length: 36 }, (_, i) => i + 1).map((number) => (
        <div
          key={number}
          data-action={ACTION_TYPES.STRAIGHT_UP}
          data-bet={`${number}`}
          className={`${
            config.RED.includes(number) ? 'red-item' : 'black-item'
          }`}
        >
          {/* start chip */}
          {shouldRenderCornerBetCatcher(number) && (
            <>
              <div
                className="corner-bet-catcher"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.CORNER}
                data-highlight={`${number}-${number + 1}-${number + 3}-${
                  number + 4
                }`}
              />
              {shouldRenderChip(
                `${number}-${number + 1}-${number + 3}-${number + 4}`,
                bets,
              ) === true && (
                <Chip
                  position="right-top"
                  icon={findChipIcon(
                    `${number}-${number + 1}-${number + 3}-${number + 4}`,
                    bets,
                  )}
                />
              )}
            </>
          )}
          {/* end chip */}
          {/* start chip */}
          {shouldRenderTopRightDoubleStreetCatcher(number) && (
            <>
              <div
                className="double-street-catcher-top-right"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.DOUBLE_STREET}
                data-highlight={`${number}-${number - 1}-${number - 2}-${
                  number + 3
                }-${number + 2}-${number + 1}`}
              />
              {shouldRenderChip(
                `${number}-${number - 1}-${number - 2}-${number + 3}-${
                  number + 2
                }-${number + 1}`,
                bets,
              ) === true && (
                <Chip
                  position="right-top"
                  icon={findChipIcon(
                    `${number}-${number - 1}-${number - 2}-${number + 3}-${
                      number + 2
                    }-${number + 1}`,
                    bets,
                  )}
                />
              )}
            </>
          )}
          {/* end chip */}
          {/* start chip */}
          {shouldRenderTopStreetCatcher(number) && (
            <>
              <div
                className="split-up-bet-catcher-top"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.STREET}
                data-highlight={`${number}-${number - 1}-${number - 2}`}
              />
              {shouldRenderChip(
                `${number}-${number - 1}-${number - 2}`,
                bets,
              ) === true && (
                <Chip
                  position="center-top"
                  icon={findChipIcon(
                    `${number}-${number - 1}-${number - 2}`,
                    bets,
                  )}
                />
              )}
            </>
          )}
          {/* end chip */}
          {(number === 1 || number === 2) && (
            <>
              <div
                className="spleet-bet-catcher"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.STREET}
                data-highlight={`${number === 1 ? '0-1-2' : '00-2-3'}`}
                style={{ zIndex: 12 }}
              />
              {shouldRenderChip(
                `${number === 1 ? '0-1-2' : '00-2-3'}`,
                bets,
              ) === true && (
                <Chip
                  position="left-top"
                  icon={findChipIcon(
                    `${number === 1 ? '0-1-2' : '00-2-3'}`,
                    bets,
                  )}
                />
              )}
            </>
          )}
          {shouldRenderTopCatcher(number) && (
            <>
              <div
                className="split-up-bet-catcher-top"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.SPLIT}
                data-highlight={`${number}-${number + 1}`}
              />
              {shouldRenderChip(`${number}-${number + 1}`, bets) === true && (
                <Chip
                  position="center-top"
                  icon={findChipIcon(`${number}-${number + 1}`, bets)}
                />
              )}
            </>
          )}
          <div className="value">{number}</div>
          {shouldRenderChip(`${number}`, bets) && (
            <Chip position="center" icon={findChipIcon(`${number}`, bets)} />
          )}
          {shouldRenderRightCatcher(number) && (
            <>
              <div
                className="split-up-bet-catcher-right"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.SPLIT}
                data-highlight={`${number}-${number + 3}`}
              />
              {shouldRenderChip(`${number}-${number + 3}`, bets) === true && (
                <Chip
                  position="right-center"
                  icon={findChipIcon(`${number}-${number + 3}`, bets)}
                />
              )}
            </>
          )}
          {shouldRenderBottomCatcher(number) && (
            <>
              <div
                className="split-up-bet-catcher-bottom"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.STREET}
                data-highlight={`${number}-${number + 1}-${number + 2}`}
              />
              {shouldRenderChip(
                `${number}-${number + 1}-${number + 2}`,
                bets,
              ) === true && (
                <Chip
                  position="center-bottom"
                  icon={findChipIcon(
                    `${number}-${number + 1}-${number + 2}`,
                    bets,
                  )}
                />
              )}
            </>
          )}
          {shouldRenderSixLineBetCatcher(number) && (
            <>
              <div
                className="six-lines-catcher"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.DOUBLE_STREET}
                data-highlight={`${number}-${number + 1}-${number + 2}-${
                  number + 3
                }-${number + 4}-${number + 5}`}
              />
              {shouldRenderChip(
                `${number}-${number + 1}-${number + 2}-${number + 3}-${
                  number + 4
                }-${number + 5}`,
                bets,
              ) === true && (
                <Chip
                  position="right-bottom"
                  icon={findChipIcon(
                    `${number}-${number + 1}-${number + 2}-${number + 3}-${
                      number + 4
                    }-${number + 5}`,
                    bets,
                  )}
                />
              )}
            </>
          )}
        </div>
      ))}
    </>
  );
};
