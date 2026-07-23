Feature: Login to the store

  Scenario: User logs in with valid credentials
    Given Navigate to login page
    When The user enters valid credentials
    And Clicks on sign in
    Then The user should be logged in
