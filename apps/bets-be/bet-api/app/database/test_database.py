import os
from unittest import TestCase

from app.database.database import MongoDatabase


class TestMongoDatabase(TestCase):
    def setUp(self) -> None:
        self.MONGO_CONNECTION_STRING = os.environ["MONGO_CONNECTION_STRING"]

    def test_get_all(self):
        database = MongoDatabase(self.MONGO_CONNECTION_STRING)
        all = database.get_all()
        self.assertTrue(all)

    def test_get_by_custom_id(self):
        database = MongoDatabase(self.MONGO_CONNECTION_STRING)
        document = database.get_by_custom_id('1')
        self.assertTrue(document)

    def test_get_by_query(self):
        database = MongoDatabase(self.MONGO_CONNECTION_STRING)
        documents = database.get_by_query(q='Barca')
        self.assertTrue(documents)
