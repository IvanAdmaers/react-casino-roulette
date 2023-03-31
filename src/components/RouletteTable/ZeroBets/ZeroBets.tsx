import React, { useContext } from 'react';
import type { FC } from 'react';

import { Chip } from '../Chip';

import { ACTION_TYPES } from '../../../constants';
import { findChipIcon, shouldRenderChip } from '../../../helpers';
import { RouletteTableContext } from '../../../context';

export const ZeroBets: FC = () => {
  const { onBetCatcherHover, bets } = useContext(RouletteTableContext);

  return (
    <>
      {['0', '00'].map((number) => (
        <div
          key={`zero-item-${number}`}
          className="zero-item"
          data-action={ACTION_TYPES[number as '0' | '00']}
          data-bet={number}
        >
          {/* start chip */}
          {number === '0' && (
            <>
              <div
                className="spleet-bet-catcher"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.STREET}
                data-highlight="0-00-2"
                style={{ left: 'auto', right: -15, zIndex: 13 }}
              />
              {shouldRenderChip('0-00-2', bets) === true && (
                <Chip
                  position="right-top"
                  icon={findChipIcon('0-00-2', bets)}
                />
              )}
            </>
          )}
          {/* end chip */}
          {/* start chip */}
          <div
            className={`corner-bet-catcher ${number === '0' ? 'bottom' : ''}`}
            onMouseEnter={onBetCatcherHover}
            onMouseLeave={onBetCatcherHover}
            data-action={ACTION_TYPES.BASKET_US}
            data-highlight={number === '0' ? '0-00-1-2-3' : '00-0-1-2-3'}
            style={{ zIndex: 14 }}
          />
          {shouldRenderChip(
            number === '0' ? '0-00-1-2-3' : '00-0-1-2-3',
            bets,
          ) === true && (
            <Chip
              position={number === '0' ? 'right-bottom' : 'right-top'}
              icon={findChipIcon(
                number === '0' ? '0-00-1-2-3' : '00-0-1-2-3',
                bets,
              )}
            />
          )}
          {/* end chip */}
          {/* start chip */}
          {number === '0' && (
            <>
              <div
                className="split-up-bet-catcher-top"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.ROW}
                data-highlight="0-00"
              />
              {shouldRenderChip('0-00', bets) === true && (
                <Chip position="center-top" icon={findChipIcon('0-00', bets)} />
              )}
            </>
          )}
          {/* end chip */}
          {/* start chip */}
          <div
            className="split-up-bet-catcher-right"
            onMouseEnter={onBetCatcherHover}
            onMouseLeave={onBetCatcherHover}
            data-action={ACTION_TYPES.SPLIT}
            data-highlight={`${number}-${number === '0' ? 2 : 3}`}
            style={{
              zIndex: number === '00' ? 12 : '',
              height: number === '00' ? '85px' : '',
            }}
          />
          {shouldRenderChip(`${number}-${number === '0' ? 2 : 3}`, bets) ===
            true && (
            <Chip
              position={
                number === '0'
                  ? 'right-top-with-no-offset'
                  : 'right-top-with-offset'
              }
              icon={findChipIcon(`${number}-${number === '0' ? 2 : 3}`, bets)}
            />
          )}
          {/* end chip */}
          {/* start chip */}
          <div
            className="split-up-bet-catcher-right"
            onMouseEnter={onBetCatcherHover}
            onMouseLeave={onBetCatcherHover}
            data-action={ACTION_TYPES.SPLIT}
            data-highlight={`${number}-${number === '0' ? 1 : 2}`}
            style={{ height: 85, top: 'auto', bottom: 0 }}
          />
          {shouldRenderChip(`${number}-${number === '0' ? 1 : 2}`, bets) ===
            true && (
            <Chip
              position={
                number === '0'
                  ? 'right-bottom-with-offset'
                  : 'right-bottom-with-no-offset'
              }
              icon={findChipIcon(`${number}-${number === '0' ? 1 : 2}`, bets)}
            />
          )}
          {/* end chip */}
          {/* start chip */}
          <div
            className={
              number === '0' ? 'basket-catcher-bottom' : 'basket-catcher-top'
            }
            onMouseEnter={onBetCatcherHover}
            onMouseLeave={onBetCatcherHover}
            data-action={ACTION_TYPES.BASKET_US}
            data-highlight={`${number === '0' ? '0-00' : '00-0'}-1-2-3`}
            style={{ left: -3 }}
          />
          {/* end chip */}
          <div className="value">{number}</div>
          {shouldRenderChip(number, bets) && (
            <Chip position="center" icon={findChipIcon(number, bets)} />
          )}
        </div>
      ))}
    </>
  );
};
