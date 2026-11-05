Feature: Search for products

Scenario: Search displays products matching the search term
  Given the user is on the main page
  When the user enters the word 'pliers' in the search bar
  And clicks 'Search' button
  Then only the products containing 'pliers' in their name should be displayed
