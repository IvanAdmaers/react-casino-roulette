import type { IRouletteTableProps } from '../../components/RouletteTable';

export const findChipIcon = (id: string, bets: IRouletteTableProps['bets']) =>
  bets[id]?.icon;
