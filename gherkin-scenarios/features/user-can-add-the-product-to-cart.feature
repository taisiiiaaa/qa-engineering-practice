Feature: Adding a product to basket

Scenario: User can add a product to the basket
  Given the user is on the product details page
  When the user clicks the "Add to cart" button
  Then the product should be added to the basket
  And the basket should contain one product