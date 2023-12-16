Feature: This feature ensures that the login functionality to the quales app works appropriately
As a user i want to visit the login page successfully so that i can perform some course management task
Scenario: Verfiy that user can login to the app
Given A user is on the quales landing page
When A user types in the correct emailaddress and password
Then The user should be logged into the app

Scenario: Verify that a user cannot login to the app with invalid credentials
Given A user is on the quales landing page
When Case 1 - A user types in the correct emailaddress and incorrect password
When Case 2 - A user types in an incorrect emailaddress and a correct password
Then The user should not be logged in and an error message Invalid Login Credential should be displayed

