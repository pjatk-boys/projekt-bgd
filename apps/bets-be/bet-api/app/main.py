from typing import List, Optional

from fastapi import FastAPI, Query
from starlette import status
from app.models import OrderByModel, DetailedEventModel, BaseEventModel

app = FastAPI()


@app.get("/")
async def root():
    return {"status": "ok"}


@app.get("/event/{event_id}")
async def get_event(event_id: str, response_model=DetailedEventModel):  # todo
    return status.HTTP_501_NOT_IMPLEMENTED


@app.get("/events/{order_by}/{q}", response_model=List[BaseEventModel])
async def get_events(order_by: Optional[OrderByModel],
                     q: Optional[str] = Query(default=None, min_length=3, max_length=25)):  # todo
    return status.HTTP_501_NOT_IMPLEMENTED


@app.post("/event/")
async def create_event(event: DetailedEventModel):  # todo
    return status.HTTP_501_NOT_IMPLEMENTED


@app.post("/events/")
async def create_events(event: List[DetailedEventModel]):  # todo
    return status.HTTP_501_NOT_IMPLEMENTED


@app.put("/event/{event_id}")
async def update_event(event_id: str, event: DetailedEventModel):  # todo
    return status.HTTP_501_NOT_IMPLEMENTED
