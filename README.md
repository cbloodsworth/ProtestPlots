# ProtestPlots Readme
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cbloodsworth_JS-Test&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=cbloodsworth_JS-Test)
## Project Information
ProtestPlots is a centralized hub of information for people to gather information about protests nearby. It gathers its data through a Python Scraper powered by Selenium and displays the information using a front-end consisting of React and Next.js.

## How to Install
### Cloning the repo locally
The repo can be cloned by using the command in the terminal

`git clone https://github.com/cbloodsworth/ProtestPlots`

This creates a ProtestPlots folder wherever you ran the command. Upon making changes, use

`git commit && git push`

### Node.js
Ensure you have Node.js and Node Package Manager installed. To ensure you have it installed, in your terminal run

`node --version && npm --version`

and you should see two version outputs. If you don't have it installed, visit https://nodejs.org/en/download/ and under LTS, download and install the version relative to your operating system. 

### React

To install React and other dependencies, run in the terminal *while in the root directory*

`npm install`

This may take a while but will install required dependencies.

## How to Run

To test the site, run in the terminal *while in the root directory*

`npm run dev`

Now go into a browser of your choosing and enter the url:

`localhost:3000`
