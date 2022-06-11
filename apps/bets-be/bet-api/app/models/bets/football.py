from enum import Enum
from typing import Optional, List
from . import BetModel

class overall_score(BetModel):
    bet_type = "overall_score"
    home_win: float
    draw: float
    away_win: float


class goals_number(BetModel):
    bet_type = "goals_number"
    above_05 = float
    above_1 = float
    above_15 = float
    above_2 = float
    above_25 = float
    above_3 = float
    above_35 = float
    above_4 = float
    above_45 = float
    above_5 = float
    above_55 = float
    above_6 = float
    above_65 = float
    above_05 = float
    above_1 = float
    above_15 = float
    above_2 = float
    above_25 = float
    above_3 = float
    above_35 = float
    above_4 = float
    above_45 = float
    above_5 = float
    above_55 = float
    above_6 = float
    above_65 = float

class both_sides_score(BetModel):
    bet_type = "both_sides_score"
    yes: float
    no: float

class halftime_winner(BetModel):
    bet_type = "halftime_winner"
    home_win: float
    draw: float
    away_win: float
    
class first_goal(BetModel):
    bet_type = "first_goal"
    home_team_scores: float
    away_team_scores: float

class handicap1(BetModel):
    bet_type = "handicap1"
    home_win: float
    draw: float
    away_win: float

class handicap2(BetModel):
    bet_type = "handicap2"
    home_win: float
    draw: float
    away_win: float

    

