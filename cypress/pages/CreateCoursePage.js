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
        this.elements.titleInputField().type("QA Zero to Hero");
        this.elements.descriptionInputField().type("This course will enhance your skill set as a QA Professional");
        this.elements.categoryField().click();
        this.elements.categoryDropdownBox().contains('Quality Assurance').click();
        this.elements.locationOnlineRadioBtn().click();
        this.elements.courseURLInputField().type("https://www.youtube.com/@ThrottleHouse");
        this.elements.locationOfflineRadioBtn().click();
        this.elements.addressInputField().clear().type("1 Awolowo Road");
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