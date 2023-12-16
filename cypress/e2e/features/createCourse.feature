Feature: This feature is to ensure that the create course functionality works appropriately

Scenario: To verify an admin user is able to create a course successfully after providing mandatory fields
Given A user is logged in and on the Add New Course page
When The user provides the following mandatory details to add a new course.--Title, Descritpion, Category, Location-- and submits the form
Then User should receive a success toast and be redirected to the List of Courses page

Scenario: To verify an admin user is unable to create a course successfully if mandatory fields are not provided
Given A user is logged in and on the Add New Course page
When The user submits the forms without providing any of the mandatory fields
Then The form should not be submitted and error message should be displayed for each compulsory field