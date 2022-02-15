@courses @ui @search

Feature: Search with query UI
    Search for courses with a particular query

    Background: Navigation
        Given I go to the main page

    Scenario: Search with query UI
        When I search for courses with query "Playwright"
        Then I should see "Playwright" in the search results