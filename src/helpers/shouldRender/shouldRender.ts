import { IRouletteTableProps } from '../../components/RouletteTable';

const noTopRender = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
const noRightRender = [34, 35, 36];
const bottomRender = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
const noCornerBetRender = [...noTopRender, 34, 35];
const sixLinesBetRender = bottomRender.slice(0, bottomRender.length - 1);
const topRightDobuleStreetRender = noTopRender.slice(0, noTopRender.length - 1);

export const shouldRenderTopCatcher = (currentNumber: number) =>
  noTopRender.includes(currentNumber) === false;

export const shouldRenderRightCatcher = (currentNumber: number) =>
  noRightRender.includes(currentNumber) === false;

export const shouldRenderBottomCatcher = (currentNumber: number) =>
  bottomRender.includes(currentNumber);

export const shouldRenderCornerBetCatcher = (currentNumber: number) =>
  noCornerBetRender.includes(currentNumber) === false;

export const shouldRenderSixLineBetCatcher = (currentNumber: number) =>
  sixLinesBetRender.includes(currentNumber);

export const shouldRenderChip = (
  id: string,
  bets: IRouletteTableProps['bets'],
) => Object.keys(bets).includes(id);

export const shouldRenderTopStreetCatcher = (currentNumber: number) =>
  noTopRender.includes(currentNumber);

export const shouldRenderTopRightDoubleStreetCatcher = (
  currentNumber: number,
) => topRightDobuleStreetRender.includes(currentNumber);
