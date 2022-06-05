from enum import Enum

from pydantic import BaseModel


class OrderByModel(str, Enum):
    date_desc = "date_desc"
    date_inc = "date_inc"
    score_desc = "score_desc"


class BaseEventModel(BaseModel):
    id: str


class DetailedEventModel(BaseEventModel):
    event_date: str
    # todo
