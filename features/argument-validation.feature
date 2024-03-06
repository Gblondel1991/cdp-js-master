Feature: Validate CLI Arguments
  Ensure that specified arguments are validated before processing

  Scenario Outline: unvalid argument(s) provided
    When program is executed with unvalid arguments: "<command>"
    Then output should contain "<output>"

    Examples:
      |             command             |                    output                   |  
      | node app.js                     | No argument has correctfully been specified |
      | node app.js --filter=ry --count | Too many arguments have been specified      |
      | node app.js --counter           | Unknown argument                            |