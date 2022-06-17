import os
from unittest import TestCase

from app.database.database import MongoDatabase


class TestMongoDatabase(TestCase):
    def test_get_all(self):
        MONGO_CONNECTION_STRING = os.environ["MONGO_CONNECTION_STRING"]
        database = MongoDatabase(MONGO_CONNECTION_STRING)
        all = database.get_all()
        self.assertTrue(all)

    def test_get_by_custom_id(self):
        MONGO_CONNECTION_STRING = os.environ["MONGO_CONNECTION_STRING"]
        database = MongoDatabase(MONGO_CONNECTION_STRING)
        all = database.get_by_custom_id('1')
        self.assertTrue(all)
