enum OrderByModel {
  DATE_DESC = "date_desc",
  DATE_INC = "date_inc",
  SCORE_DESC = "score_desc",
}

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
