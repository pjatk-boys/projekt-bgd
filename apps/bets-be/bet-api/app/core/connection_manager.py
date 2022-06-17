import os
from typing import Optional, List

from app.database.database import MongoDatabase
from app.models import DetailedEventModel

MONGO_CONNECTION_STRING = os.environ["MONGO_CONNECTION_STRING"]


class ConnectionManager:
    def __init__(self, database: Optional[MongoDatabase] = MongoDatabase(MONGO_CONNECTION_STRING)):
        self.database = database

    def get_all(self, model=DetailedEventModel) -> List[DetailedEventModel]:
        documents = self.database.get_all()
        return [model(**document) for document in documents]

    def get_event(self, event_id: str, model=DetailedEventModel) -> DetailedEventModel:
        document = self.database.get_by_custom_id(event_id)
        return model(**document)


    def get_by_query(self, q) -> List[DetailedEventModel]:
        raise NotImplementedError

    def create(self, event: DetailedEventModel):
        raise NotImplementedError
