from typing import Optional

from app.database import MongoDatabase
from app.models import DetailedEventModel


class ConnectionManager:
    def __init__(self, database: Optional[MongoDatabase] = MongoDatabase()):
        self.database = database

    async def get_event(self, id: str) -> DetailedEventModel:
        all_events = self.database.get_events()
        return next(event for event in all_events if event.id == id)
