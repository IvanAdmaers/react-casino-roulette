import { createContext } from 'react';
import type { MouseEvent } from 'react';

import type { IRouletteTableProps } from '../components/RouletteTable';

export interface IRouletteTableContextProps {
  bets: IRouletteTableProps['bets'];
  onBetCatcherHover: (event: MouseEvent<HTMLDivElement>) => void;
}

export const RouletteTableContext = createContext({
  bets: {},
  onBetCatcherHover: () => null,
} as IRouletteTableContextProps);
