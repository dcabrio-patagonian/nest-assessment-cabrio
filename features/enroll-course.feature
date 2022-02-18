@courses @ui @enroll

Feature: Enroll in a course as user
    Enroll in a course as user after login

    Background: Navigation
        Given I go to the main page
        When I click the login button
        And I am on the login page
        And I fill in the email and password fields
        And I click the submit button
        Then I should be logged in
        When I search for courses with query "Java"
        Then I should see "Java" in the search results
        When I filter by "English" in the "Language" submenu
        And I filter by "Free" in the "Price" submenu
        And I click the course at position "2"

    Scenario: Enroll in a course as user UI
        Then I should enroll in the course if I am not enrolled in it

    Scenario: Enroll in a course and check on API
        When I save the course name
        # Parameter list: https://www.udemy.com/developers/affiliate/methods/get-courses-list/
        # Search parameter is already set by a previous step
        When I call the courses-list endpoint with the previous query and the parameters "price=price-free&language=en&page=1"
        Then I should see the course name in the courses list
