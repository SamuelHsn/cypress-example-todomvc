Feature: Manage Task



    Scenario: Add Task
        Given I visit TodoApp
        When I add "Homework" Task
        Then the task "Homework" is added in the list
