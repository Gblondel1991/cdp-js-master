Feature: Count elements
  Command-line interface returns elements from data.js, adding count to countries and people names

  Scenario: Count people and animals in all countries
    When program is executed for counting with the command "node app.js --count"
    Then output should contain counts