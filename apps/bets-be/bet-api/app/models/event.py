from enum import Enum
from typing import Optional, List
from datetime import datetime

from pydantic import BaseModel

from .bets import OverallScore


class OrderByModel(str, Enum):
    date_desc = "date_desc"
    date_inc = "date_inc"
    score_desc = "score_desc"
    score_inc = "score_inc"


class BaseEventModel(BaseModel):
    id: str
    home_team: str
    away_team: str
    discipline: str


class SureBet(BaseModel):
    value: float
    home_win: float
    draw: float
    away_win: float

    def __len__(self):
        return self.value

    def __lt__(self, other):
        return self.value < other.value

# class Bet():
#     event_id: str
#     bookmaker: str
#     value: float
#     bet_type: str # "1x2_home_win" | "1x2_draw"

# class Surebet:
#     bets: List[Bet]
#     value: float


class DetailedEventModel(BaseEventModel):
    event_date: datetime
    created_at: str
    description: str
    location: str
    updated_at: Optional[str]
    bets: List[OverallScore]  # just for now
    surebet: SureBet
