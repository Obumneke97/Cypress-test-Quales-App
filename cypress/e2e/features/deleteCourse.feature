Feature: To ensure the Delete Course functionality works appropriately

    Scenario: To verify that an admin user is a able to delete a course successfully
    Given A user is logged in and on the View Course page
    When The user clicks on the Delete button
    Then Success notification toast should be displayed and user should be directed back to the List of Courses page