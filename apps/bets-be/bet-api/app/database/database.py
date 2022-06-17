from typing import List

from bson import ObjectId
from pymongo import MongoClient

from app.models import DetailedEventModel


class MongoDatabase:
    def __init__(self, mongo_connection_string):
        self.client = MongoClient(mongo_connection_string)
        self.db = self.client.get_database('surebets-db')
        self.collection = self.db['events']

    def get_all(self) -> List[DetailedEventModel]:
        cursor = self.collection.find()
        serialised_objects = [DetailedEventModel(**document) for document in cursor]
        return serialised_objects

    def get_by_id(self, _id: str) -> DetailedEventModel:
        document = self.client.db.collection.find_one({'_id': ObjectId(_id)})
        return document

    def create(self, document) -> str:
        result = self.db.test.insert_one(document)
        return result.inserted_id
