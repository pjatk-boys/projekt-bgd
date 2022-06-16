from . import BetModel


class OverallScore(BetModel):
    bet_type = "overall_score"
    home_win: float
    draw: float
    away_win: float


class GoalsNumber(BetModel):
    bet_type = "goals_number"
    goals_number: float
    value: float


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
