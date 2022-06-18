from typing import List, Optional

from bson import ObjectId
from pymongo import MongoClient, DESCENDING, ASCENDING

from app.models import DetailedEventModel, OrderByModel

surebets_pipeline = [
            {
            "$addFields": {
            "bet_with_max_home_win": {
                "$reduce": {
                "input": "$bets",
                "initialValue": { "home_win": 0 },
                "in": {
                    "$cond": [
                    { "$gte": ["$$this.home_win", "$$value.home_win"] },
                    "$$this",
                    "$$value",
                    ],
                },
                },
            },
            "bet_with_max_draw": {
                "$reduce": {
                "input": "$bets",
                "initialValue": { "draw": 0 },
                "in": {
                    "$cond": [
                    { "$gte": ["$$this.draw", "$$value.draw"] },
                    "$$this",
                    "$$value",
                    ],
                },
                },
            },
            "bet_with_max_away_win": {
                "$reduce": {
                "input": "$bets",
                "initialValue": { "away_win": 0 },
                "in": {
                    "$cond": [
                    { "$gte": ["$$this.away_win", "$$value.away_win"] },
                    "$$this",
                    "$$value",
                    ],
                },
                },
            },
            },
        },
        {
            "$set": {
            "surebet": {
                "home_win": "$bet_with_max_home_win.home_win",
                "draw": "$bet_with_max_draw.draw",
                "away_win": "$bet_with_max_away_win.away_win",
                "value": {
                "$subtract": [
                    1,
                    {
                    "$sum": [
                        { "$divide": [1, "$bet_with_max_home_win.home_win"] },
                        { "$divide": [1, "$bet_with_max_draw.draw"] },
                        { "$divide": [1, "$bet_with_max_away_win.away_win"] },
                    ],
                    },
                ],
                },
            },
            },
        },
        {
            "$unset": [
            "bet_with_max_home_win",
            "bet_with_max_draw",
            "bet_with_max_away_win",
            ],
        }
        ]

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

    def get_by_query(self, q: str):
        cursor = self.collection.find({'$text': {'$search': q}})
        return [document for document in cursor]

    def get_with_surebets(self, order_by: Optional[OrderByModel] = None, q: Optional[str] = None, id: Optional[str] = None):
        pipeline = [*surebets_pipeline]

        if id is not None:
            pipeline = [{ "$match": { "id": id}}, *pipeline]

        if q is not None:
            pipeline = [{ "$match": { "$or":[{"home_team": q},{"away_team":q}]}}, *pipeline]

        if order_by is not None:
            if order_by == OrderByModel.date_inc:
                pipeline.append({"$sort": {"event_date": 1}})
            elif order_by == OrderByModel.date_desc:
                pipeline.append({"$sort": {"event_date": -1}})
            elif order_by == OrderByModel.score_inc:
                pipeline.append({"$sort": {"surebet.value": 1}})
            elif order_by == OrderByModel.score_desc:
                pipeline.append({"$sort": {"surebet.value": -1}})

        print(pipeline)
        cursor = self.collection.aggregate(pipeline)
        return [document for document in cursor]

    def create(self, document) -> str:
        result = self.db.test.insert_one(document)
        return result.inserted_id
