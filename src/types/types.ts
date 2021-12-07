export interface Cell {
  row: number,
  col: number,
}

export type TPlayers = 'X' | 'O';
type BoardPlayers = TPlayers | '';
export type GameState = {
  board: BoardPlayers[][],
  currentMove: TPlayers,
  winner: BoardPlayers | 'noWinner',
  countStep: number,
  numberWins: Record<TPlayers, number>
};
