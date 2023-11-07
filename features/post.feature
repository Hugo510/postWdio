Feature: As a user I can perform POST req

  Scenario: Perform POST req
    Given I am on <page>
    When I select <method>
    And I set the <endpoint>
    And I add 2 parameters
    And I set the name of the parameters with <param1> and <param2>
    And I set the value of the parameters with <value1> and <value2>
    Then I press the button and get a <status_code>

    Examples: 
      | page                        | method | endpoint                       | param1 | param2 | value1 | value2 | status_code |
      | "https://resttesttest.com/" |      1 | "https://reqres.in/api/users/" | "name" | "job"  | "John" | "Doe"  |         201 |

