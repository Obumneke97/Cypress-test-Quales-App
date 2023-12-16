import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import courseDetails from "@pages/EditCoursePage";

Given ("A user is logged in", () => {
    cy.visit('/login');
    cy.get('[data-testid="EmailAddress"]').type("ay@mail.com");
    cy.get('[data-testid="Password"]').type("pass1234");
    cy.get('.MuiButton-contained').click();
});

When ("User selects or clicks on a course from the list and proceeds to click the Edit button", () => {
    cy.viewport('macbook-16');
    cy.get(':nth-child(9) > .MuiCardContent-root > .MuiTypography-body1').click();//course name is try try try
    cy.get('.css-klop1v').click();
});

Then ("The Edit course page should be displayed and Course details should be prefilled", () => {
    cy.viewport('macbook-16');
    cy.url('includes', '/courses/edit/43');
    cy.get('.css-tzsjye > .MuiButton-root').should('be.visible');
    cy.get('[data-testid="Title*"]').should('have.value',courseDetails.title);//This assertion is used to check the value attribute of form elements such as input fields, textareas, and select elements.
    cy.get('[data-testid="Description*"]').should('have.value', courseDetails.description);
    cy.get('#demo-simple-select').should('have.text', courseDetails.category);//This assertion is used to check the text content of an element, irrespective of the type of element.
    cy.get('[data-testid="ImageURL"]').should('have.value', courseDetails.imageUrl);
    cy.get('[data-testid="isPremium"]').should('not.be.checked');
    cy.get('[data-testid="online"]').should('be.checked');
    cy.get('[data-testid="CourseURL*(mustbeyoutube)"]').should('have.value',courseDetails.courseUrl);
});

//2nd Scenario 
Given ("A user is logged in and on the Edit Course page", () => {
    cy.visit('/login');
    cy.get('[data-testid="EmailAddress"]').type("ay@mail.com");
    cy.get('[data-testid="Password"]').type("pass1234");
    cy.get('.MuiButton-contained').click();
    cy.viewport('macbook-16');
    cy.get(':nth-child(8) > .MuiCardContent-root > .MuiTypography-body1').click();//course name is Postman Essential N
    cy.get('.css-klop1v').click();
});

When ("The user provides the necessary mandatory details to edit the course _Title, Descritpion, Category, Location_ and submits the form", () => {
    cy.viewport('macbook-16');
    cy.get('[data-testid="Title*"]').clear().type("Postman Essential New");
    cy.get('[data-testid="Description*"]').clear().type("This course will enhance your skill set as a Dev Ops Engr");
    cy.get('#demo-simple-select').click();
    cy.get('#menu- > .MuiPaper-root > .MuiList-root').contains('Software Development').click();
    cy.get('[data-testid="online"]').click();
    cy.get('[data-testid="CourseURL*(mustbeyoutube)"]').clear().type("https://www.youtube.com/@ThrottleHouse");
    cy.get('[data-testid="offline"]').click();
    cy.get('[data-testid="Address*"]').clear().type("1 Awolowo Road");
    cy.get('.css-tzsjye > .MuiButton-root').click();
});

Then ("Success notification toast should be displayed and user should be directed back to the View Course page", () =>{
    cy.get('.Toastify__toast-body').should('be.visible').and('contain', "Course updated successfully");
    cy.url('includes', '/courses/');
    cy.contains('View Course').should('be.visible');
});