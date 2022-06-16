import { BetModel } from "./bets";
import { Discipline } from "./disciplines";

export type BaseEventModel = {
  id: string;
  home_team: string;
  away_team: string;
  discipline: Discipline;
};

export type DetailedEventModel = BaseEventModel & {
  event_date: string;
  created_at: string;
  updated_at?: string;
  bets: BetModel[];
};
