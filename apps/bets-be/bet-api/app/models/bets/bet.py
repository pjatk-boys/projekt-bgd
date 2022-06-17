from pydantic import BaseModel

class BetModel(BaseModel):
    timestamp: str
    bookmaker_name: str
    url: str
    sports: str
    bet_type: str
    # bet_name: str
