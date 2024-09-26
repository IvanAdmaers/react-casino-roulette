import type { IRouletteTableProps } from '../RouletteTable'

export const findChipIcon = (id: string, bets: IRouletteTableProps['bets']) =>
  bets[id]?.icon
