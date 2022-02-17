@courses @ui @search

Feature: Search courses
    Search for courses with categories/queries

    Background: Navigation
        Given I go to the main page

    Scenario: Search with category UI
        When I search for courses with the category "Development/Web Development/JavaScript"
        Then I should see "JavaScript" as the category search

    Scenario: Search with query UI
        When I search for courses with query "Playwright"
        Then I should see "Playwright" in the search results