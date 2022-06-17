from typing import List

from bson import ObjectId
from pymongo import MongoClient

from app.models import DetailedEventModel


class MongoDatabase:
    def __init__(self, mongo_connection_string):
        self.client = MongoClient(mongo_connection_string)
        self.db = self.client.get_database('surebets-db')
        self.collection = self.db['events']

    def get_all(self):
        cursor = self.collection.find()
        return [document for document in cursor]

    def get_by_mongo_id(self, _id: str) -> DetailedEventModel:
        document = self.collection.find_one({'_id': ObjectId(_id)})
        return document

    def get_by_custom_id(self, _id: str):
        document = self.collection.find_one({'id': _id})
        return document

    def create(self, document) -> str:
        result = self.db.test.insert_one(document)
        return result.inserted_id
