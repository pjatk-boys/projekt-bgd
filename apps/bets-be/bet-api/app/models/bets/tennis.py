from . import BetModel


class match_winner(BetModel):
    bet_type = "match_winner"
    home_win: float
    away_win: float


class sets_number(BetModel):
    bet_type = "sets_number"
    sets_20: float
    sets_02: float
    sets_21: float
    sets_12: float


class total_sets(BetModel):
    bet_type = "total_sets"
    sets_2 = float
    sets_3 = float


class first_set_winner(BetModel):
    bet_type = "first_set_winner"
    home_win: float
    away_win: float


class second_set_winner(BetModel):
    bet_type = "second_set_winner"
    home_win: float
    away_win: float
