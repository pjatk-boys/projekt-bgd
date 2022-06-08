import unittest
from unittest import TestCase
from unittest.mock import ANY

from app.core.connection_manager import ConnectionManager
from app.models import DetailedEventModel
from ..database import get_mock_database


class TestConnectionManager(TestCase):
    def test_get_event(self):
        # given
        product_id = '1'
        mock_database = get_mock_database()

        # when
        connection_manager = ConnectionManager(mock_database)
        event = connection_manager.event(product_id)

        # then
        self.assertIsInstance(event, DetailedEventModel)
        self.assertEqual(event.id, product_id)


if __name__ == '__main__':
    unittest.main()
