# Javascript developer test

Project is a Node.js command-line interface, that provide data from [data.js file](./src/data.js).
Datas can be provided by applying filter, or count.

## Getting Started

1. Clone the repository on your machine

`git clone https://github.com/Gblondel1991/cdp-js-master.git`

2. Go to root directory

cd `cdp-js-master`

3. Get datas by filtering

run `node app.js --filter=yourFilter`

4. Get datas by counting

run `node app.js --count`

5. Be cautious

CLI only accept **one parameter** on run <br>
CLI only accept **two kinds of arguments** : --filter or --run. <br>
Any other attempt won't work

## Testing

Project implements two testing approches : BDD and unit tests

1. Go to root directory

2. Install required dependencies

`npm i`

3. Run BDD tests

`npm run test-bdd`

4. Run unit tests

`npm run test-unit`
