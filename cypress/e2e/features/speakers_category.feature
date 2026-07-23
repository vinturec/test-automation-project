Feature: Navigate to Speakers category

  Scenario: User clicks the Speakers category and lands on the category page
    Given Navigate to website store
    When The user clicks the Speakers category
    Then The Speakers category page should load successfully
