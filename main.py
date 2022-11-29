import time

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from bs4 import BeautifulSoup as bs
import json
import string
import pandas as pd

def scrape(link_to_scrape):
    # open the site and block pop-ups
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument('disable-notifications')
    chrome_options.add_experimental_option('excludeSwitches', ['enable-logging'])
    driver = webdriver.Chrome(options=chrome_options)
    url = 'http://facebook.com'

    driver.get(url)

    # log in to the site
    # on facebook, username = 'email', password = 'pass'
    username = WebDriverWait(driver, 15).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "input[name='email']")))
    password = WebDriverWait(driver, 15).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "input[name='pass']")))

    # login button is type 'submit'
    # enter username and password
    with open('credentials.json') as credentialFile:
        data = json.load(credentialFile)

    username.clear()
    username.send_keys(data['username'])
    password.clear()
    password.send_keys(data['password'])
    time.sleep(2)

    # click the log in button
    button = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[type='submit']"))).click()

    # once we are logged in, now go to our target events site to scrape:
    url2 = 'https://www.facebook.com/indivisiblegainesville/events/?ref=page_internal/'
    time.sleep(2)
    driver.get(url2)

    # now grab events data
    # first i need to click see more at the bottom of the page a few times.
    time.sleep(2)
    # scroll down
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(2)


    # need to click the "see more" button at the bottom
    button2 = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "[aria-label='See more']"))).click()
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(3)
    button3 = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "[aria-label='See more']"))).click()
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    # Get a dump of the HTML.
    pageSource = driver.execute_script("return document.body.innerHTML;")
    with open('page_source.html', 'w', encoding="utf-8") as htmlDump:
        soupData = bs(pageSource, 'html.parser')
        htmlDump.write(str(soupData.prettify()))

    driver.close()

def readPageSource(filename):
    with open(filename) as htmlDump:
        soupData = bs(htmlDump, 'html.parser')

    # Get the data from it and store it in a dataframe.
    titles, locations, dates = [], [], []
    ourData = pd.DataFrame({
        'titles':titles,
        'locations':locations, 
        'dates':dates
    })

    raw_titles = soupData.find_all('span', class_="")

    for t in raw_titles:
        if (str(t).startswith('<span class="">') 
        and string.ascii_letters.count(str(t)[44])):
            titles.append(str(t)[44:-35])

    for t in titles:
        print(t)


############ ACTUAL SCRIPT
scrape("change later")
readPageSource('page_source.html')
print("exited")