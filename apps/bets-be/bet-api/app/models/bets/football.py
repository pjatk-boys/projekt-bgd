from enum import Enum
from typing import Optional, List
from . import BetModel

class overall_score(BetModel):
    bet_type = "overall_score"
    home_win: float
    draw: float
    away_win: float

class over_under(BetModel):
    bet_type = "over_under"
    over_15 = float
    over_25 = float
    over_35 = float
    over_45 = float
    over_55 = float
    over_55 = float
    over_65 = float
    over_75 = float
    under_15 = float
    under_25 = float
    under_35 = float
    under_45 = float
    under_55 = float

class over_under(BetModel):
    

