from typing import Optional, List

from app.database.database import MongoDatabase
from app.exceptions.exceptions import ItemNotFound
from app.models import DetailedEventModel, BaseEventModel


class ConnectionManager:
    def __init__(self, database: Optional[MongoDatabase] = MongoDatabase()):
        self.database = database

    async def get_all(self) -> List[BaseEventModel]:
        return self.database.get_events()

    async def event(self, event_id: str) -> DetailedEventModel:
        all_events = await self.get_all()
        try:
            yield next(event for event in all_events if event.id == event_id)
        except StopIteration:
            raise ItemNotFound(event_id)

    async def get_by_query(self, q) -> List[BaseEventModel]:
        raise NotImplementedError

    def create(self, event: DetailedEventModel):
        raise NotImplementedError
