class LoginPage {
    elements = {
        openApp: () => cy.visit("/login"),    //Cypress command to visit the quales landing page is cy.visit()
        emailAddressInputField : () => cy.get('[data-testid="EmailAddress"]'),    // .get used to spy on a particular web element
        passwordInputField : () => cy.get('[data-testid="Password"]'),
        loginBtn: () => cy.get('.MuiButton-contained'),
        logoutBtn: () => cy.contains('Log Out'),
        errorToast:()=> cy.get('.Toastify__toast-body'),
    };

    visitQualesApp() {
        this.elements.openApp();
    };

    typeCorrectEmailAddressAndCorrectPassword() {
        this.elements.emailAddressInputField().type(Cypress.env("emailAddress"));    // .type is used to tell cypress to type in the input on the field
        this.elements.passwordInputField().type(Cypress.env("password"));
    };

    typeCorrectEmailAddressAndIncorrectPassword() {
        this.elements.emailAddressInputField().type(Cypress.env("emailAddress"));
        this.elements.passwordInputField().type(Cypress.env("incorrectPassword"));
    };

    typeIncorrectEmailAddressAndCorrectPassword() {
        this.elements.emailAddressInputField().type(Cypress.env("incorrectEmailAddress"));
        this.elements.passwordInputField().type(Cypress.env("password"));
    };

    clickLoginButton() {
        this.elements.loginBtn().click();    //.click is used to tell cypress to click on a button
    };

    verifySuccessfulLogin() {
        this.elements.logoutBtn().should("be.visible");    //.contains to ascertain and .should to confirm the ascertion
    };

    verfiyUnsuccessfulLogin() {
        this.elements.errorToast().should("be.visible").and("contain", "Invalid Login Credential");
        //cy.contains('Invalid Login Credential').should("be.visible");

    };

}

export const loginPage = new LoginPage();
//Alternatively, the code below can be used to export the Page
//export default LoginPage;