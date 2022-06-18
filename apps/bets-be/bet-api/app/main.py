from typing import List, Optional

from fastapi import FastAPI, status, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.core import ConnectionManager
from app.exceptions.exceptions import ItemNotFound, InvalidEvent
from app.database.mock_database.mock_database import get_mock_database
from app.models import OrderByModel, DetailedEventModel, sort_events, validate_event

origins = [
    'http://localhost:3000',
    'https://pjatk-boys.github.io',
]

description = """
PJATK school project - Betting odds analysis
"""

app = FastAPI(
    title="Bets API",
    description=description,
    version="0.0.1",
    contact={
        "name": "PJATK boys",
        "url": "https://github.com/pjatk-boys",
    },
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

event_manager = ConnectionManager()


@app.get("/", response_description="root", tags=["root"])
async def root():
    return {"status": "ok"}


@app.get("/event/{event_id}", response_description="Get detailed info about event", response_model=DetailedEventModel,
         tags=["event"])
async def get_event(event_id: str):
    try:
        event = event_manager.get_event(event_id)
        return event.dict()
    except ItemNotFound as e:
        raise HTTPException(status_code=404, detail=e.message)


# @app.get("/events", response_description="Returns list of events", response_model=List[DetailedEventModel],
#          tags=["events"])
# async def get_events(order_by: Optional[OrderByModel] = None,
#                      q: Optional[str] = None):
#     if q is not None:
#         events: List[DetailedEventModel] = event_manager.get_by_query(q)
#     else:
#         events = event_manager.get_all()

#     if order_by is not None:
#         return sort_events(events, order_by)
#     return events

@app.get("/events", response_description="Returns list of events with surebets", response_model=List[DetailedEventModel],
         tags=["events"])
async def get_events_surebets(order_by: Optional[OrderByModel] = None, q: Optional[str] = None):
    events = event_manager.get_with_surebets(order_by=order_by, q=q)
    return events


@app.post("/event/", response_description="Posts a new event", tags=["event"])
async def create_event(event: DetailedEventModel):  # todo
    try:
        validate_event(event)
    except InvalidEvent:
        return status.HTTP_400_BAD_REQUEST
    event_manager.create(event)
    return status.HTTP_501_NOT_IMPLEMENTED


@app.post("/events/", response_description="Posts a list of events", tags=["events"])
async def create_events(events: List[DetailedEventModel]):  # todo
    [event_manager.create(event) for event in events]
    return status.HTTP_501_NOT_IMPLEMENTED


@app.put("/event/{event_id}", response_description="Updates event info", tags=["event"])
async def update_event(event_id: str, event: DetailedEventModel):  # todo
    return status.HTTP_501_NOT_IMPLEMENTED
