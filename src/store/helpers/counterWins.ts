const counterWins = (symbol: string, currentWins: any) => {
  const copyCurrentWins = { ...currentWins };
  if (symbol === 'ничья') {
    copyCurrentWins.X += 1;
    copyCurrentWins.O += 1;
  } else {
    copyCurrentWins[symbol] += 1;
  }
  return copyCurrentWins;
};

export default counterWins;
