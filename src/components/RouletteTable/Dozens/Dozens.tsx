import React, { useContext } from 'react';
import type { FC } from 'react';

import { Chip } from '../Chip';
import { RouletteTableContext } from '../../../context';

import { shouldRenderChip, findChipIcon } from '../../../helpers';
import { ACTION_TYPES } from '../../../constants';

export const Dozens: FC = () => {
  const { onBetCatcherHover, bets } = useContext(RouletteTableContext);

  return (
    <>
      <div
        className="doz-item"
        onMouseEnter={onBetCatcherHover}
        onMouseLeave={onBetCatcherHover}
        data-action={ACTION_TYPES['1ST_DOZEN']}
        data-bet={ACTION_TYPES['1ST_DOZEN']}
        data-highlight={ACTION_TYPES['1ST_DOZEN']}
      >
        <div>1-12</div>
        {shouldRenderChip(ACTION_TYPES['1ST_DOZEN'], bets) && (
          <Chip
            position="center"
            icon={findChipIcon(ACTION_TYPES['1ST_DOZEN'], bets)}
          />
        )}
      </div>
      <div
        className="doz-item"
        onMouseEnter={onBetCatcherHover}
        onMouseLeave={onBetCatcherHover}
        data-action={ACTION_TYPES['2ND_DOZEN']}
        data-bet={ACTION_TYPES['2ND_DOZEN']}
        data-highlight={ACTION_TYPES['2ND_DOZEN']}
      >
        <div>13-24</div>
        {shouldRenderChip(ACTION_TYPES['2ND_DOZEN'], bets) && (
          <Chip
            position="center"
            icon={findChipIcon(ACTION_TYPES['2ND_DOZEN'], bets)}
          />
        )}
      </div>
      <div
        className="doz-item"
        onMouseEnter={onBetCatcherHover}
        onMouseLeave={onBetCatcherHover}
        data-action={ACTION_TYPES['3RD_DOZEN']}
        data-bet={ACTION_TYPES['3RD_DOZEN']}
        data-highlight={ACTION_TYPES['3RD_DOZEN']}
      >
        <div>25-36</div>
        {shouldRenderChip(ACTION_TYPES['3RD_DOZEN'], bets) && (
          <Chip
            position="center"
            icon={findChipIcon(ACTION_TYPES['3RD_DOZEN'], bets)}
          />
        )}
      </div>
    </>
  );
};
