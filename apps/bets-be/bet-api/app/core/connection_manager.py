from typing import Optional, List

from app.database.database import MongoDatabase
from app.models import DetailedEventModel


class ConnectionManager:
    def __init__(self, database: Optional[MongoDatabase] = MongoDatabase()):
        self.database = database

    def get_all(self) -> List[DetailedEventModel]:
        return self.database.get_all()

    def get_event(self, event_id: str) -> DetailedEventModel:
        return self.database.get_by_id(event_id)

    def get_by_query(self, q) -> List[DetailedEventModel]:
        raise NotImplementedError

    def create(self, event: DetailedEventModel):
        raise NotImplementedError
