class LoginPage {
    elements = {
        openApp: () => cy.visit("/login"),
        emailAddressInputField : () => cy.get('[data-testid="EmailAddress"]'),
        passwordInputField : () => cy.get('[data-testid="Password"]'),
        loginBtn: () => cy.get('.MuiButton-contained'),
        logoutBtn: () => cy.contains('Log Out'),
    };

    visitQualesApp() {
        this.elements.openApp();
    };

    typeEmailAddressAndPassword() {
        this.elements.emailAddressInputField().type(Cypress.env("emailAddress"));
        this.elements.passwordInputField().type(Cypress.env("password"));
    };

    logoutButtonShouldBeVisible() {
        this.elements.logoutBtn().logoutButtonShouldBeVisible
    };


}