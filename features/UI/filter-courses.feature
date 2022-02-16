@courses @ui @search

Feature: Filter courses search
    Search for courses and then filter the results

    Background: Navigation
        Given I go to the main page
        When I search for courses with query "Python"
        Then I should see "Python" in the search results

    Scenario: Filter couses search UI
        When I filter by "English" in the "Language" submenu
        And I filter by "Free" in the "Price" submenu
        When I click the course at position "1"
        Then I should see the filters filters applied

