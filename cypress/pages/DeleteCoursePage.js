class DeleteCoursePage {
    elements = {
        tenthCourseCard: () => cy.get('.MuiPaper-elevation1').eq(9),
        firstCourseCard: () => cy.get('.MuiPaper-elevation1').eq(0),
        deleteBtn: () => cy.get('.css-wvpqgg'),
        confirmDeleteBtn: () => cy.get('.MuiBox-root > .MuiButton-contained'),
        notificationToast: () => cy.get('.Toastify__toast-body'),
        redirectingURL: () => cy.url('includes',"/courses"),
        listOfCoursesPageText: () => cy.contains('List of Courses'),
        fieldElementOfCourseToBeDeleted: () => cy.get('.MuiPaper-root > :nth-child(1) > .MuiTypography-h5'),
        titleOfCourseToBeDeleted: () => cy.get('@deletedCourseTitle'),
        oldCourseTitle: (deletedCourseTitle) => cy.contains(deletedCourseTitle),
    };

    clickOnTheTenthCourseCard() {
        this.elements.tenthCourseCard().click();
    };

    clickTheDeleteButtonAndConfirmDelete () {
        this.elements.deleteBtn().click();
        this.elements.confirmDeleteBtn().click();
    };

    getTitleOfCourseToBeDeleted () {
        return this.elements.fieldElementOfCourseToBeDeleted().invoke('text').as('deletedCourseTitle');
    };

    verifySuccessfulDeleteAndThatUserIsRedirectedToListOfCoursesPage (deletedCourseTitle) {
        // Assert success notification
        this.elements.notificationToast().should('be.visible').and('contain', "Course deleted successfully");

        // Assert redirection to List of Courses page
        this.elements.redirectingURL();
        this.elements.listOfCoursesPageText().should('be.visible');

        //Wait for the cards to be displayed. It could be any card 
        cy.viewport('macbook-16');
        this.elements.firstCourseCard().should('be.visible');

        // Assert that the deleted course is not present on the List of Courses page
        this.elements.oldCourseTitle(deletedCourseTitle).should('not.exist');
    };
};

export const deleteCoursePage = new DeleteCoursePage();