@courses @ui @search

Feature: Filter courses search
    Search for courses and then filter the results

    Background: Navigation
        Given I go to the main page

    Scenario: Filter couses with query search UI
        When I search for courses with query "Python"
        Then I should see "Python" in the search results
        When I filter by "English" in the "Language" submenu
        And I filter by "Free" in the "Price" submenu
        And I click the course at position "1"
        Then I should see the filters filters applied

    Scenario: Filter courses with category search UI
        When I search for courses with the category "Development/Web Development/JavaScript"
        Then I should see "JavaScript" as the category search
        When I filter by "English" in the "Language" submenu
        And I filter by "Free" in the "Price" submenu
        And I click the course at position "1"
        Then I should see the filters filters applied

