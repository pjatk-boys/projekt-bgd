from . import BetModel


class OverallScore(BetModel):
    bet_type = "overall_score"
    home_win: float
    draw: float
    away_win: float


class GoalsNumber(BetModel):
    bet_type = "goals_number"
    home_above_05: float
    home_above_1: float
    home_above_15: float
    home_above_2: float
    home_above_25: float
    home_above_3: float
    home_above_35: float
    home_above_4: float
    home_above_45: float
    home_above_5: float
    home_above_55: float
    home_above_6: float
    home_above_65: float

    away_above_05: float
    away_above_1: float
    away_above_15: float
    away_above_2: float
    away_above_25: float
    away_above_3: float
    away_above_35: float
    away_above_4: float
    away_above_45: float
    away_above_5: float
    away_above_55: float
    away_above_6: float
    away_above_65: float


class BothSidesScore(BetModel):
    bet_type = "both_sides_score"
    yes: float
    no: float


class HalftimeWinner(BetModel):
    bet_type = "halftime_winner"
    home_win: float
    draw: float
    away_win: float


class FirstGoal(BetModel):
    bet_type = "first_goal"
    home_team_scores: float
    away_team_scores: float


class Handicap1(BetModel):
    bet_type = "handicap1"
    home_win: float
    draw: float
    away_win: float


class Handicap2(BetModel):
    bet_type = "handicap2"
    home_win: float
    draw: float
    away_win: float
