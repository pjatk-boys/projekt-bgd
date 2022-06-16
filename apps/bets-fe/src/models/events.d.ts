type BaseEventModel = {
  id: string;
  home_team: string;
  away_team: string;
  discipline: Discipline;
};

type DetailedEventModel = BaseEventModel & {
  event_date: string;
  created_at: string;
  updated_at?: string;
  bets: BetModel[];
};
