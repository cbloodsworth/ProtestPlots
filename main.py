import time

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
import json

# open the site and block pop-ups

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument('disable-notifications')
driver = webdriver.Chrome(options=chrome_options)
url = 'http://facebook.com'

driver.get(url)

# log in to the site
# on facebook, username = 'email', password = 'pass'

username = WebDriverWait(driver, 15).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "input[name='email']")))
password = WebDriverWait(driver, 15).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "input[name='pass']")))

# login button is type 'submit'
# enter username and password

f = open('credentials.json')
data = json.load(f)

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





