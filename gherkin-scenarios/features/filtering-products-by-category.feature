Feature: Filtering products by category

Scenario: User can browse products by category
  Given the user is on the main page
  When the user selects the 'Chisels' category
  Then products from the 'Chisels' category should be displayed
  And products from other categories should not be displayed