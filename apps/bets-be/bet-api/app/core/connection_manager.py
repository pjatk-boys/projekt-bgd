import os
from typing import Optional, List

from app.database.database import MongoDatabase
from app.models import DetailedEventModel, OrderByModel


MONGO_CONNECTION_STRING = "mongodb+srv://admin:XAA3QGx0CZ8HV3Fm@projekt-bgd.zmbqk.mongodb.net"


class ConnectionManager:
    def __init__(self, database: Optional[MongoDatabase] = MongoDatabase(MONGO_CONNECTION_STRING)):
        self.database = database

    def get_all(self, model=DetailedEventModel) -> List[DetailedEventModel]:
        documents = self.database.get_all()
        return [model(**document) for document in documents]

    def get_event(self, event_id: str, model=DetailedEventModel) -> DetailedEventModel:
        documents = self.database.get_with_surebets(id=event_id)
        return model(**documents[0])

    def get_by_query(self, q: str, model=DetailedEventModel) -> List[DetailedEventModel]:
        documents = self.database.get_by_query(q)
        return [model(**document) for document in documents]
 
    def get_with_surebets(self, order_by: Optional[OrderByModel] = None, q: Optional[str] = None, model=DetailedEventModel) -> List[DetailedEventModel]:
        documents = self.database.get_with_surebets(order_by=order_by, q=q)
        return [model(**document) for document in documents]

    def create(self, event: DetailedEventModel):
        raise NotImplementedError
