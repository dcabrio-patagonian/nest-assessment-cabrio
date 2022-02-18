@login @ui

Feature: Login as user UI
    Login as a user with a valid username and password though the UI.

    Background: Navigation
        Given I go to the main page
        When I click the login button

    Scenario: Login as user UI
        When I am on the login page
        And I fill in the email and password fields
        And I click the submit button
        Then I should be logged in