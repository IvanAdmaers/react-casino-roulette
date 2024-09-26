import { useContext, type FC } from 'react'

import { RouletteTableContext } from '~/context/RouletteTableContext'
import { ACTION_TYPES } from '../constants/action-types'
import { findChipIcon } from '../helpers/findChipIcon'
import { shouldRenderChip } from '../helpers/shouldRender'
import { Chip } from './Chip'

export const Columns: FC = () => {
  const { onBetCatcherHover, bets } = useContext(RouletteTableContext)

  return (
    <>
      <div
        className="column-item"
        onMouseEnter={onBetCatcherHover}
        onMouseLeave={onBetCatcherHover}
        data-action={ACTION_TYPES['1ST_COLUMN']}
        data-bet={ACTION_TYPES['1ST_COLUMN']}
        data-highlight={ACTION_TYPES['1ST_COLUMN']}>
        <div className="value">1st</div>
        {shouldRenderChip(ACTION_TYPES['1ST_COLUMN'], bets) && (
          <Chip
            position="center"
            icon={findChipIcon(ACTION_TYPES['1ST_COLUMN'], bets)}
          />
        )}
      </div>
      <div
        className="column-item"
        onMouseEnter={onBetCatcherHover}
        onMouseLeave={onBetCatcherHover}
        data-action={ACTION_TYPES['2ND_COLUMN']}
        data-bet={ACTION_TYPES['2ND_COLUMN']}
        data-highlight={ACTION_TYPES['2ND_COLUMN']}>
        <div className="value">2nd</div>
        {shouldRenderChip(ACTION_TYPES['2ND_COLUMN'], bets) && (
          <Chip
            position="center"
            icon={findChipIcon(ACTION_TYPES['2ND_COLUMN'], bets)}
          />
        )}
      </div>
      <div
        className="column-item"
        onMouseEnter={onBetCatcherHover}
        onMouseLeave={onBetCatcherHover}
        data-action={ACTION_TYPES['3RD_COLUMN']}
        data-bet={ACTION_TYPES['3RD_COLUMN']}
        data-highlight={ACTION_TYPES['3RD_COLUMN']}>
        <div className="value">3rd</div>
        {shouldRenderChip(ACTION_TYPES['3RD_COLUMN'], bets) && (
          <Chip
            position="center"
            icon={findChipIcon(ACTION_TYPES['3RD_COLUMN'], bets)}
          />
        )}
      </div>
    </>
  )
}
