Feature: Special Offers section

  Scenario: User views special offers and opens product page
    Given Navigate to website store
    Then Special Offers should be visible on the home page
    When The user clicks on the first See Offer button
    Then The product details page for the offer should be displayed
