export const getRandomRouletteWinBet = () => {
  const possibleWinBets = [
    '0',
    '00',
    ...Array.from({ length: 36 }, (_, i) => `${i + 1}`),
  ];

  const randomIndex =
    window.crypto.getRandomValues(new Uint32Array(1))[0] %
    possibleWinBets.length;

  return possibleWinBets[randomIndex];
};
