from enum import Enum
from typing import Optional, List

from pydantic import BaseModel

from .bets import BetModel


class OrderByModel(str, Enum):
    date_desc = "date_desc"
    date_inc = "date_inc"
    score_desc = "score_desc"


class BaseEventModel(BaseModel):
    id: str
    home_team: str
    away_team: str
    discipline: str


class DetailedEventModel(BaseEventModel):
    event_date: str
    created_at: str
    updated_at: Optional[str]
    bets: List[BetModel]
