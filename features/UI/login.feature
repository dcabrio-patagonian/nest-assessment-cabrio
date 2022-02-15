@login @ui

Feature: Login as user UI
    Login as a user with a valid username and password though the UI.

    Background: Navigation
        Given I go to the main page
        And I click on on the button with the selector "a[data-purpose='header-login']"

    Scenario: Login as user UI
        Given I am on the login page
        And I fill in the email and password fields
        And I click on on the button with the selector "input[type='submit']"
        Then I should be logged in