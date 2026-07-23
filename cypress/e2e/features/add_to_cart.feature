Feature: Automation test

  Scenario: Add item in cart
    Given Navigate to website store
    When The user selects item
    And Add it to cart
    And Checkout the item
    Then It Navigates to cart page


