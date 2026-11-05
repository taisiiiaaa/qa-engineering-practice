Feature: Checking product quantity in the cart

Scenario: Removing a product updates the cart quantity
  Given the user has 2 products in the cart
  And the user is on the cart page
  When the user removes one product from the cart
  Then the cart should contain one product
