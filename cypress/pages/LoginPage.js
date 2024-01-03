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
        this.elements.emailAddressInputField().type(Cypress.env("EMAILADDRESS"));    // .type is used to tell cypress to type in the input on the field
        this.elements.passwordInputField().type(Cypress.env("PASSWORD"));
    };

    typeCorrectEmailAddressAndIncorrectPassword() {
        this.elements.emailAddressInputField().type(Cypress.env("EMAILADDRESS"));
        this.elements.passwordInputField().type(Cypress.env("INCORRECTPASSWORD"));
    };

    typeIncorrectEmailAddressAndCorrectPassword() {
        this.elements.emailAddressInputField().clear().type(Cypress.env("INCORRECTEMAILADDRESS"));
        this.elements.passwordInputField().clear().type(Cypress.env("PASSWORD"));
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