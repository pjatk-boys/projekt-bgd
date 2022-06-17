import os
import urllib.parse
from typing import List

from bson import ObjectId
from pymongo import MongoClient

from app.models import DetailedEventModel

username = os.environ["username"]
password = os.environ["password"]
host = os.environ["host"]
port = os.environ["port"]

client = MongoClient(f'mongodb://{username}:{urllib.parse.quote_plus(password)}@{host}:{port}')
db = client.test_database
collection = db.test_collection


class MongoDatabase:
    pass

    def get_all(self) -> List[DetailedEventModel]:
        return client.db.collection.find({})

    def get_by_id(self, _id: str) -> DetailedEventModel:
        document = client.db.collection.find_one({'_id': ObjectId(_id)})
        return document

    def create(self, document) -> str:
        result = db.test.insert_one(document)
        return result.inserted_id
