import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

Given ("A user is logged in and on the Add New Course page", () => {
    cy.visit("/login");
    cy.get('[data-testid="EmailAddress"]').type("ay@mail.com");
    cy.get('[data-testid="Password"]').type("pass1234");
    cy.get('.MuiButton-contained').click();
    cy.get('.MuiGrid-root > .MuiButtonBase-root').click();
}) 

When ("The user provides the following mandatory details to add a new course.--Title, Descritpion, Category, Location-- and submits the form", () =>{
    cy.viewport("macbook-16");
    cy.get('[data-testid="Title*"]').type("QA Zero to Hero");//{force: true})
    cy.get('[data-testid="Description*"]').type("This course will enhance your skill set as a QA Professional");
    cy.get('#demo-simple-select').click()
    cy.get('#menu- > .MuiPaper-root > .MuiList-root').contains('Quality Assurance').click();
    cy.get('[data-testid="online"]').click();
    cy.get('[data-testid="CourseURL*(mustbeyoutube)"]').type("https://www.youtube.com/@ThrottleHouse");
    cy.get('[data-testid="offline"]').click();
    cy.get('[data-testid="Address*"]').clear().type("1 Awolowo Road");
    cy.get('.css-tzsjye > .MuiButton-root').click();
})

Then ("User should receive a success toast and be redirected to the List of Courses page", () => {
    cy.get('.Toastify__toast-body').should("be.visible").and("contain","Course created successfully")
    cy.url('includes',"/courses")
});

When ("The user submits the forms without providing any of the mandatory fields", () => {
    cy.viewport("macbook-16");
    cy.get('[data-testid="offline"]').click();
    cy.get('.css-tzsjye > .MuiButton-root').click();
});

Then ("The form should not be submitted and error message should be displayed for each compulsory field", () => {
    cy.url('includes', '/courses/add')
    cy.get('.Toastify__toast-body').should('be.visible').and('contain', 'Please fill form properly')
    cy.get('.css-tzsjye > :nth-child(1) > .MuiTypography-root').should('have.length.greaterThan', 0)
});