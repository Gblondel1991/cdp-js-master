Feature: Filter elements based on a pattern
  Command-line interface returns specific elements from data.js based on the filter string provided as argument

  Scenario: Pattern match with element(s)
    When program is executed for filtering with the command "node app.js --filter=ry"
    Then output should include elements containing the pattern, like "Oryx"

  Scenario: Pattern does not match with any element
    When program is executed for filtering with the command "node app.js --filter=wxz"
    Then console output should be "No animal corresponding to research"