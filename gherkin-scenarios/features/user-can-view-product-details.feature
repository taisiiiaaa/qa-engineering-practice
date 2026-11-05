Feature: User can view product details

Scenario: User can view product details
  Given the user is on the main page
  When the user selects the 'Combination Pliers' product
  Then the product details page should be displayed
  And the product name should be 'Combination Pliers'