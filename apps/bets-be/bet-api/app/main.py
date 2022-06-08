from typing import List, Optional

from fastapi import FastAPI, Query
from starlette import status

from app.core import ConnectionManager
from app.exceptions.exceptions import ItemNotFound, InvalidEvent
from app.models import OrderByModel, DetailedEventModel, BaseEventModel, sort_events, validate_event

app = FastAPI()
event_manager = ConnectionManager()


@app.get("/")
async def root():
    return {"status": "ok"}


@app.get("/event/{event_id}", response_model=DetailedEventModel)
async def get_event(event_id: str):
    try:
        event: DetailedEventModel = event_manager.event(event_id)
        return event.json()
    except ItemNotFound:
        return status.HTTP_404_NOT_FOUND


@app.get("/events/{order_by}/{q}", response_model=List[BaseEventModel])
async def get_events(order_by: Optional[OrderByModel],
                     q: Optional[str] = Query(default=None, min_length=3, max_length=25)):  # todo
    # try: #todo kuba is there already validation delivered by FastAPI?
    #     validate_query(q)
    #     validate_order_by(order_by)
    # except InvalidParams:
    #     return status.HTTP_400_BAD_REQUEST
    if q is not None:
        events: List[BaseEventModel] = await event_manager.get_by_query(q)
    else:
        events = await event_manager.get_all()

    if order_by is not None:
        return sort_events(events, order_by)
    return events


@app.post("/event/")
async def create_event(event: DetailedEventModel):  # todo
    try:
        validate_event(event)
    except InvalidEvent:
        return status.HTTP_400_BAD_REQUEST
    event_manager.create(event)
    return status.HTTP_501_NOT_IMPLEMENTED



@app.post("/events/")
async def create_events(events: List[DetailedEventModel]):  # todo
    [event_manager.create(event) for event in events]
    return status.HTTP_501_NOT_IMPLEMENTED


@app.put("/event/{event_id}")
async def update_event(event_id: str, event: DetailedEventModel):  # todo
    return status.HTTP_501_NOT_IMPLEMENTED
