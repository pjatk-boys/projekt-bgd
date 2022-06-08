from typing import List

from app.models import OrderByModel, BaseEventModel


def sort_events(events: List[BaseEventModel], sorting_strategy: OrderByModel) -> List[BaseEventModel]:
    raise NotImplementedError
