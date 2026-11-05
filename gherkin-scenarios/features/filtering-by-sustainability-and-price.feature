Feature: Filtering products by sustainability and price

Scenario: User filters the products by sustainability and price
  Given the user is on the main page
  When the user selects 'Show only eco-friendly products'
  And the user sets the price range from $1 to $10
  Then no products matching these criteria should be displayed