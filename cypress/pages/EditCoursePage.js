class EditCoursePage {
    elements = {
        titleInputField: () => cy.get('.MuiInputBase-inputMuiOutlinedInput-inputcss-1x5jdmq'),//
        titleInputField2: () => cy.get('[data-testid="Title*"]'),
        descriptionInputField: () => cy.get('.MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline css-u36398'),
        descriptionInputField2: () => cy.get('[data-testid="Description*"]'),
        selectedCategory: () => cy.get('#demo-simple-select'),
        categoryDropdownBox: () => cy.get('#menu- > .MuiPaper-root > .MuiList-root'),
        imageUrlInputField: () => cy.get('[data-testid="ImageURL"]'),
        isPremiumCheckbox: () => cy.get('[data-testid="isPremium"]'),
        onlineRadioButton: () => cy.get('[data-testid="online"]'),
        offlineRadioButton: () => cy.get('[data-testid="offline"]'),
        //selectedMode: () => ,
        courseUrlInputField: () => cy.get('[data-testid="CourseURL*(mustbeyoutube)"]'),
        addressInputField: () => cy.get('[data-testid="Address*"]'),
        updateCourseBtn: () => cy.get('.css-tzsjye > .MuiButton-root'),
        backButton: () => cy.get('.MuiGrid-root > .MuiButtonBase-root'),
        loginSuccessfullToast: () => cy.contains('Login Successfull'),
        fifthCourseCard: () => cy.get('.MuiPaper-elevation1').eq(4),
        thirdCourseCard: () => cy.get('.MuiPaper-elevation1').eq(2),
        editButton: () => cy.contains('Edit'),
        editCoursePageUrl: () => cy.url('includes', '/courses/edit/'),
        notificationToast: () => cy.get('.Toastify__toast-body'),
        redirectingURL: () => cy.url('includes', '/courses/'),
        viewCoursePage: () => cy.contains('View Course'),
    }

    waitForLoginSuccessfullToastToNotBeVisible() {
        this.elements.loginSuccessfullToast().should('not.be.visible');
    };
    
    clickOnTheFifthCourseOnTheListAndProceedToClickTheEditButton() {
        this.elements.fifthCourseCard().click();
        this.elements.editButton().click();
    };

    verifyTheCourseDetailsArePrefilledOnTheEditCoursePage() {
        this.elements.editCoursePageUrl();
        this.elements.updateCourseBtn().should('be.visible');
        this.elements.titleInputField().should('not.be.empty'); //, Cypress.env("TITLE"));
        this.elements.descriptionInputField().should('not.be.empty');//, Cypress.env("DESCRIPTION"));
        this.elements.selectedCategory().should('not.be.empty');//, Cypress.env("CATEGORY"));
        this.elements.imageUrlInputField().should('not.have.value');
        this.elements.isPremiumCheckbox().should('not.be.checked');
        cy.get('[data-testid="online"],[data-testid="offline"]').filter(':checked').should('have.length', 1);
        //this.elements.offlineRadioButton().should('be.checked');
        this.elements.addressInputField().should('not.be.empty');//, Cypress.env("ADDRESS"));
    };

    clickOnTheThirdCourseOnTheListAndProceedToClickTheEditButton() {
        this.elements.thirdCourseCard().click();
        this.elements.editButton().click();
    };

    editThePrefilledFormWithMandatoryDetailsAndSubmit() {
        this.elements.titleInputField2().clear().type(Cypress.env("TITLE"));
        this.elements.descriptionInputField2().clear().type(Cypress.env("DESCRIPTION"));
        this.elements.selectedCategory().click();
        this.elements.categoryDropdownBox().contains(Cypress.env("CATEGORY2")).click();
        this.elements.onlineRadioButton().click();
        this.elements.courseUrlInputField().clear().type(Cypress.env("COURSEURL"));
        this.elements.offlineRadioButton().click();
        this.elements.addressInputField().clear().type(Cypress.env("ADDRESS"));
        this.elements.updateCourseBtn().click();
    };

    verifyCourseIsUpdatedSuccessfully() {
        this.elements.notificationToast().should('be.visible').and('contain', "Course updated successfully");
        this.elements.redirectingURL();
        this.elements.viewCoursePage().should('be.visible');
    };
}


//const courseDetails = {
 ///  title: "try try try",
    //description: "prrrractice",
    //category: "Quality Assurance",
    //isPremium: false,
    //imageUrl: "https://source.unsplash.com/user/c_v_r/900x800",
    //location: "online",
    //courseUrl: "https://www.youtube.com/watch?v=8vXoMqWgbQQ",
//};

export const editCoursePage = new EditCoursePage(); 