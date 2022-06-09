from typing import Optional, List

from app.database.database import MongoDatabase
from app.exceptions.exceptions import ItemNotFound
from app.models import DetailedEventModel


class ConnectionManager:
    def __init__(self, database: Optional[MongoDatabase] = MongoDatabase()):
        self.database = database

    def get_all(self) -> List[DetailedEventModel]:
        return self.database.get_events()

    def get_event(self, event_id: str) -> DetailedEventModel:
        all_events = self.get_all()
        try:
            a = next(event for event in all_events if event.id == event_id)
            return a
        except StopIteration:
            raise ItemNotFound(event_id)

    def get_by_query(self, q) -> List[DetailedEventModel]:
        raise NotImplementedError

    def create(self, event: DetailedEventModel):
        raise NotImplementedError
