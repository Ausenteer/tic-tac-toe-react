const createText = (winner: string) => {
  let text;
  if (winner === 'noWinner') {
    text = 'Победила дружба!';
  } else if (winner === 'X') {
    text = 'Крестики победили!';
  } else {
    text = 'Нолики победили!';
  }
  return text;
};

export default createText;
