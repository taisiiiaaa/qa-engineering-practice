Feature: User without account cannot log in to their account

Scenario: User without account cannot log in to their account
  Given the user has not registered an account
  And the user is on login page
  When the user enters their credentials for an unregistered account
  Then the user should not be logged in
  And an error message should be displayed
