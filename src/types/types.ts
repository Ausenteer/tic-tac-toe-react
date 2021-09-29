export interface Cell {
  row: number,
  col: number,
}

export type TPlayers = 'X' | 'O';

export type GameState = {
  board: string[][],
  currentMove: TPlayers,
  winner: TPlayers | 'noWinner' | '',
  countStep: number,
  numberWins: Record<TPlayers, number>
};
