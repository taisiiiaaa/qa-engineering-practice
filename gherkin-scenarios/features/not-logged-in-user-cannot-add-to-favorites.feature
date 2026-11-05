Feature: Not logged in user cannot add products to favorites

Scenario: Unauthenticated user cannot add a product to favorites
  Given the user is not signed in to their account
  And the user is on product details page
  When the user tries to add the product to favorites
  Then an error message should appear
