import time
from datetime import datetime

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.core.utils import ChromeType

from models.models import OverallScore, GoalsNumber, Handicap1, DetailedEventModel

chrome_service = Service(ChromeDriverManager(chrome_type=ChromeType.CHROMIUM).install())

chrome_options = Options()
options = [
    "--headless",
    "--disable-gpu",
    "--window-size=1920,1200",
    "--ignore-certificate-errors",
    "--disable-extensions",
    "--no-sandbox",
    "--disable-dev-shm-usage"
]
for option in options:
    chrome_options.add_argument(option)

driver = webdriver.Chrome(service=chrome_service, options=chrome_options)

driver.get('https://sports.bwin.com/en/sports/football-4/today')
body = driver.find_element_by_tag_name('body')
time.sleep(2)
main = body.find_element_by_id("main-view")
grid = main.find_element_by_class_name("grid-wrapper")
title = main.find_element_by_class_name("grid-title")
print(title.text)
events_groups = grid.find_elements_by_tag_name("ms-event-group")
for group in events_groups:
    try:
        group_name = group.find_element_by_class_name("header-wrapper").find_element_by_class_name("title")
        print(group_name.text)
        calendar_events_infos = group.find_elements_by_class_name("calendar-grid-info")
        for event in calendar_events_infos:
            url = event.find_element_by_tag_name("a").get_attribute("href")
            participants = event.find_elements_by_class_name("participant")
            for participant in participants:
                print(participant.text)
            score_board = event.find_element_by_tag_name("ms-grid-scoreboard")
            print(score_board.text)
            try:
                scores = score_board.find_elements_by_class_name("cell")
                if any(scores):
                    print(scores)  # todo
            except:
                scores = []

            starting_time = event.find_element_by_class_name("starting-time")
            grid_group = event.find_element_by_class_name("grid-group-container")
            bet_options = grid_group.find_elements_by_tag_name("ms-option-group")
            overall_score = bet_options[0].text.split("\n")
            over_under = bet_options[1].text.split("\n")
            handicap01 = bet_options[2].text.split("\n")

            overall_score_model = OverallScore(
                timestamp=datetime.now().isoformat(),
                bookmaker_name='bwin',
                url=url,
                sports='football',

                home_win=overall_score[0],
                draw=overall_score[1],
                away_win=overall_score[2],
            )

            goals_number_model = GoalsNumber(
                timestamp=datetime.now().isoformat(),
                bookmaker_name='bwin',
                url=url,
                sports='football',
                goals_number=over_under[0],
                value=over_under[1]
            )

            handicap01_model = Handicap1(
                timestamp=datetime.now().isoformat(),
                bookmaker_name='bwin',
                url=url,
                sports='football',

                home_win=handicap01[0],
                draw=handicap01[1],
                away_win=handicap01[2]
            )

            event_model = DetailedEventModel(event_date=starting_time, created_at=datetime.now().isoformat(),
                                             updated_at=datetime.now().isoformat(), bets=[overall_score_model,
                                                                                          goals_number_model,
                                                                                          handicap01_model])
            print(event_model)
    except:
        pass

print("\n\n\n")
sc = driver.save_screenshot('ss.png')
