from datetime import datetime
from typing import List

from app.models import OrderByModel, DetailedEventModel


def sort_events(events: List[DetailedEventModel], sorting_strategy: OrderByModel) -> List[DetailedEventModel]:
    if sorting_strategy == OrderByModel.date_inc:
        events.sort(key=lambda x: datetime.strptime(x.event_date, '%Y-%m-%d'))
    elif sorting_strategy == OrderByModel.date_desc:
        events.sort(key=lambda x: datetime.strptime(x.event_date, '%Y-%m-%d'), reverse=True)
    elif sorting_strategy == OrderByModel.score_inc:
        events.sort(key=lambda x: x.surebet)
    elif sorting_strategy == OrderByModel.score_desc:
        events.sort(key=lambda x: x.surebet, reverse=True)
    return events
