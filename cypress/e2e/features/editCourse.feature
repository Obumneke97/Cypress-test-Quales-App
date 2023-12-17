Feature: This feature is to ensure that the edit course functionality works appropriately

Scenario: To verify that on the Edit course page, details of the selected course are prefilled on landing on the page 
Given A user is logged in
When User selects or clicks on a course from the list and proceeds to click the Edit button
Then The Edit course page should be displayed and Course details should be prefilled

Scenario: To verify that an admin user is able to Edit course successfully after providing mandatory fields
Given A user is logged in and on the Edit Course page
When The user provides the necessary mandatory details to edit the course _Title, Descritpion, Category, Location_ and submits the form
Then Success notification toast should be displayed and user should be directed back to the View Course page

