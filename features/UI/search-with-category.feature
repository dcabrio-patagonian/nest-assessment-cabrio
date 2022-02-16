@courses @ui @search

Feature: Search with category UI
    Search for courses with a particular category

    Background: Navigation
        Given I go to the main page

    Scenario: Search with category UI
        When I search for courses with the category "Development/Web Development/JavaScript"
        Then I should see "JavaScript" as the category search