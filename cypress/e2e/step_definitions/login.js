import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("A user is on the quales landing page", () => {
    //Cypress command to visit the quales landing page is cy.visit()
    cy.visit("/login");
});
When("A user types in the correct emailaddress and password", () => {
    //.get used to spy on a particular web elemet. Then .type is used to tell cypress to type in the input on the field
    cy.get('[data-testid="EmailAddress"]').type("ay@mail.com");
    cy.get('[data-testid="Password"]').type("pass1234");
    //.click is used to tell cypress to click on a button
    cy.get('.MuiButton-contained').click();
});

Then("The user should be logged into the app", () => {
    //.contains to assertain and .should to confirm the ascertain
    cy.contains('Log Out').should("be.visible");
});

When("Case 1 - A user types in the correct emailaddress and incorrect password", () => {
    cy.get('[data-testid="EmailAddress"]').type("ay@mail.com");
    cy.get('[data-testid="Password"]').type("PASS1234");
    cy.get('.MuiButton-contained').click();
});

When("Case 2 - A user types in an incorrect emailaddress and a correct password", () => {
    cy.get('[data-testid="EmailAddress"]').clear().type("iay@mail.com");
    cy.get('[data-testid="Password"]').clear().type("pass1234");
    cy.get('.MuiButton-contained').click();
});

Then("The user should not be logged in and an error message Invalid Login Credential should be displayed", ()=> {
    cy.get('.Toastify__toast-body').should("be.visible").and("contain","Invalid Login Credential");
    //cy.contains('Invalid Login Credential').should("be.visible");
}); 