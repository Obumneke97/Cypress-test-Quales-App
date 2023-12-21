import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";

Given("A user is on the quales landing page", () => {
    //Cypress command to visit the quales landing page is cy.visit()
    loginPage.visitQualesApp();
});
When("A user types in the correct emailaddress and password", () => {
    loginPage.typeCorrectEmailAddressAndCorrectPassword();
    loginPage.clickLoginButton();
});

Then("The user should be logged into the app", () => {
    loginPage.verifySuccessfulLogin();
});

When("Case 1 - A user types in the correct emailaddress and incorrect password", () => {
    loginPage.typeCorrectEmailAddressAndIncorrectPassword();
    loginPage.clickLoginButton();
});

When("Case 2 - A user types in an incorrect emailaddress and a correct password", () => {
    loginPage.typeIncorrectEmailAddressAndCorrectPassword();
    loginPage.clickLoginButton();
});

Then("The user should not be logged in and an error message Invalid Login Credential should be displayed", ()=> {
    loginPage.verfiyUnsuccessfulLogin();
}); 