Feature: Contact form submission

  Scenario: User fills in the Contact Us form and submits it
    Given Navigate to website store
    When The user selects category "Laptops"
    And The user selects product "HP Chromebook 14 G1(ES)"
    And The user enters email "test@example.com"
    And The user types the subject message "This is a test message"
    And The user clicks the Send button
    Then The form should be reset or show confirmation
