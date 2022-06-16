from typing import Optional, List

from pydantic import BaseModel


class BetModel(BaseModel):
    timestamp: str
    bookmaker_name: str
    url: str
    sports: str
    bet_type: str


class GoalsNumber(BetModel):
    bet_type = "goals_number"
    goals_number: float
    value: float

class OverallScore(BetModel):
    bet_type = "overall_score"
    home_win: float
    draw: float
    away_win: float


class Handicap1(BetModel):
    bet_type = "handicap1"
    home_win: float
    draw: float
    away_win: float


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
