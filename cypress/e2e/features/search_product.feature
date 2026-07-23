Feature: Search for a product

  Scenario: User searches for a product
    Given Navigate to website store
    When The user types "Tablet" directly into the hidden search bar
    Then Products related to "Tablet" should be visible
