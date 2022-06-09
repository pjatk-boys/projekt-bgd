import json
from enum import Enum
from pathlib import Path
from unittest.mock import MagicMock

from app.models import DetailedEventModel


class MockScenario(str, Enum):
    all_products = 'all_products'
    single_product = 'single_product'


def get_mock_database() -> MagicMock:
    mock = MagicMock()
    mock.get_event.return_value = get_return_value(MockScenario.single_product)
    mock.get_events.return_value = get_return_value(MockScenario.all_products)

    return mock


def get_return_value(scenario: MockScenario):
    p = Path(__file__).with_name(f'{scenario}.json')
    with p.open('rt') as f:
        return_value_raw = json.loads(f.read())
    if scenario is MockScenario.all_products:
        return [DetailedEventModel(**product) for product in return_value_raw]
    elif scenario is MockScenario.single_product:
        return DetailedEventModel(**return_value_raw)
