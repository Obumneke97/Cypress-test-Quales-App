import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ("A user is logged in and on the View Course page", () => {
    cy.visit('/login');
    cy.get('[data-testid="EmailAddress"]').type("ay@mail.com");
    cy.get('[data-testid="Password"]').type("pass1234");
    cy.get('.MuiButton-contained').click();
    cy.get(':nth-child(11) > .MuiCardMedia-root').click();
});

When ("The user clicks on the Delete button", () => {
    cy.get('.css-wvpqgg').click();
    cy.get('.MuiBox-root > .MuiButton-contained').click();
});

Then ("Success notification toast should be displayed and user should be directed back to the List of Courses page", () => {
    cy.get('.Toastify__toast-body').should('be.visible').and('contain', "Course deleted successfully");
    cy.url('includes', '/courses');
    //need to ascertain that the deleted course is not still on list of courses
    cy.contains('List of Courses').should('be.visible');
});