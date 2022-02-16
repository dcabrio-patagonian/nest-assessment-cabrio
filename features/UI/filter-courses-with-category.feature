@courses @ui @search

Feature: Filter courses with category UI
    Search for courses with a particular category and filter the results

    Background: Navigation
        Given I go to the main page
        When I search for courses with the category "Development/Web Development/JavaScript"
        Then I should see "JavaScript" as the category search

    Scenario: Filter courses with category UI
        When I filter by "English" in the "Language" submenu
        And I filter by "Free" in the "Price" submenu
        And I click the course at position "1"
        Then I should see the filters filters applied