from unittest import TestCase
from unittest.mock import MagicMock

from app.connection_manager import ConnectionManager
from app.models import DetailedEventModel


class TestConnectionManager(TestCase):
    def test_get_event(self):
        # given
        product_id = '5'
        expected_event = DetailedEventModel(...)  # todo Bartek
        mock_database = MagicMock()
        # mock function... # todo Bartek

        # when
        connection_manager = ConnectionManager(mock_database)
        event = connection_manager.get_event(product_id)

        # then
        self.assertEqual(event, expected_event)
        self.assertIsInstance(event, DetailedEventModel)
