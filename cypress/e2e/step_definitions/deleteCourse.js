import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";
import { deleteCoursePage } from "@pages/DeleteCoursePage";
import { createCoursePage } from "@pages/CreateCoursePage";

let deletedCourseTitle;

Given ("A user is logged in and on the View Course page", () => {
    loginPage.visitQualesApp();
    loginPage.typeCorrectEmailAddressAndCorrectPassword();
    loginPage.clickLoginButton();
    deleteCoursePage.clickOnTheTenthCourseCard();
});

When ("The user clicks on the Delete button and Confirms Delete", () => {
    createCoursePage.changeThePageView();
    deleteCoursePage.getTitleOfCourseToBeDeleted(). then((title) => {
        deletedCourseTitle = title;
        deleteCoursePage.clickTheDeleteButtonAndConfirmDelete();
    });
});

Then ("Success notification toast should be displayed and user should be directed back to the List of Courses page", () => {
    deleteCoursePage.verifySuccessfulDeleteAndThatUserIsRedirectedToListOfCoursesPage(deletedCourseTitle);
    });