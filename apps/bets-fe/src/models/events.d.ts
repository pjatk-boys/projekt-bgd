import { BetModel } from "./bets";
import { Discipline } from "./disciplines";
import { SureBet } from "./surebets";

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
  surebets: SureBet[];
};
