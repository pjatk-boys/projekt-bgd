from unittest import TestCase
from unittest.mock import Mock

from app.models import sort_events, OrderByModel
from app.models.event import SureBet


class Test(TestCase):
    def test_sort_events_by_date(self):
        mock1 = Mock()
        mock1.event_date = '2021-05-05'
        mock2 = Mock()
        mock2.event_date = '2020-05-05'
        mocks = [mock1, mock2]

        sorted_events = sort_events(mocks, sorting_strategy=OrderByModel.date_desc)
        print(sorted_events)

    def test_sort_events_by_value(self):
        mock1 = Mock()
        mock1_surebet = SureBet(value=3.0)
        mock1.surebet = [mock1_surebet]
        mock2 = Mock()
        mock2_surebet = SureBet(value=1.1)
        mock2.surebet = [mock2_surebet]
        mocks = [mock1, mock2]

        sorted_events = sort_events(mocks, OrderByModel.score_inc)
        self.assertEqual(sorted_events[0].surebets[0].value, 1.1)


