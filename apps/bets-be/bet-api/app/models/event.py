from enum import Enum
from typing import Optional, List

from pydantic import BaseModel

from .bets import BetModel


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
    # bets: List[BetModel]
    value: float

    def __len__(self):
        return self.value

    def __lt__(self, other):
        return self.value < other.value


class DetailedEventModel(BaseEventModel):
    event_date: str
    created_at: str
    updated_at: Optional[str]
    bets: List[BetModel]
    surebet: List[SureBet]
