Feature: Cart item removal

  Scenario: User removes an item from the cart
    Given Navigate to website store
    When The user selects item
    And Add it to cart
    And The user opens the cart
    And Removes the item from the cart
    Then The cart should be empty
