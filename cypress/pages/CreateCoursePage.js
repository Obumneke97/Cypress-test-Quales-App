class CreateCoursePage{
    elements = {
        addCourseBtn: () => cy.get('.MuiGrid-root > .MuiButtonBase-root'),
        viewPort: () => cy.viewport("macbook-16"),
        titleInputField: () => cy.get('[data-testid="Title*"]'),
        descriptionInputField: () => cy.get('[data-testid="Description*"]'),
        categoryField: () => cy.get('#demo-simple-select'),
        categoryDropdownBox: () => cy.get('#menu- > .MuiPaper-root > .MuiList-root'),
        locationOnlineRadioBtn: () => cy.get('[data-testid="online"]'),
        courseURLInputField: () => cy.get('[data-testid="CourseURL*(mustbeyoutube)"]'),
        locationOfflineRadioBtn: () => cy.get('[data-testid="offline"]'),
        addressInputField: () => cy.get('[data-testid="Address*"]'),
        submitBtn: () => cy.get('.css-tzsjye > .MuiButton-root'),
        notificationToast: () => cy.get('.Toastify__toast-body'),
        redirectingURL: () => cy.url('includes',"/courses"),
        compulsoryFieldValidationText: () => cy.get('.css-tzsjye > :nth-child(1) > .MuiTypography-root'),
        addNewCoursePage: () => cy.url('includes', '/courses/add'),
    };

    clickAddCourseButton() {
        this.elements.addCourseBtn().click();
    };

    changeThePageView() {
        this.elements.viewPort();
    };

    fillTheAddCourseFormWithMandatoryFields() {
        this.elements.titleInputField().type(Cypress.env("TITLE"));
        this.elements.descriptionInputField().type(Cypress.env("DESCRIPTION"));
        this.elements.categoryField().click();
        this.elements.categoryDropdownBox().contains(Cypress.env("CATEGORY")).click();
        this.elements.locationOnlineRadioBtn().click();
        this.elements.courseURLInputField().type(Cypress.env("COURSEURL"));
        this.elements.locationOfflineRadioBtn().click();
        this.elements.addressInputField().clear().type(Cypress.env("ADDRESS"));
    };

    clickTheSubmitButton() {
        this.elements.submitBtn().click();
    };

    verifySuccessfulCourseCreation() {
        this.elements.notificationToast().should("be.visible").and("contain","Course created successfully");
        this.elements.redirectingURL();
    };

    verifyErrorToastandErrorValdiationForUnsuccessfulCourseCreationIsDisplayed() {
        this.elements.notificationToast().should("be.visible").and("contain", "Please fill form properly");
        this.elements.compulsoryFieldValidationText().should('have.length.greaterThan', 0);
    };

    verifyUserRemainsOnTheCreateCoursePageForUnsuccessfulCourseCreationAttempt() {
        this.elements.addNewCoursePage();
    };
}

export const createCoursePage = new CreateCoursePage();