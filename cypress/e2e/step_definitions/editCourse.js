import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";
import { createCoursePage } from "@pages/CreateCoursePage";
import { editCoursePage } from "@pages/EditCoursePage";

Given ("A user is logged in", () => {
    loginPage.visitQualesApp();
    loginPage.typeCorrectEmailAddressAndCorrectPassword();
    loginPage.clickLoginButton();
});

When ("User selects or clicks on a course from the list and proceeds to click the Edit button", () => {
    createCoursePage.changeThePageView();
    editCoursePage.waitForLoginSuccessfullToastToNotBeVisible();
    editCoursePage.clickOnTheFifthCourseOnTheListAndProceedToClickTheEditButton();
});

Then ("The Edit course page should be displayed and Course details should be prefilled", () => {
    createCoursePage.changeThePageView();
    editCoursePage.verifyTheCourseDetailsArePrefilledOnTheEditCoursePage();
});

//2nd Scenario 
Given ("A user is logged in and on the Edit Course page", () => {
    loginPage.visitQualesApp();
    loginPage.typeCorrectEmailAddressAndCorrectPassword();
    loginPage.clickLoginButton();
    createCoursePage.changeThePageView();
    editCoursePage.clickOnTheThirdCourseOnTheListAndProceedToClickTheEditButton();
});

When ("The user provides the necessary mandatory details to edit the course _Title, Descritpion, Category, Location_ and submits the form", () => {
    createCoursePage.changeThePageView();
    editCoursePage.editThePrefilledFormWithMandatoryDetailsAndSubmit();
});

Then ("Success notification toast should be displayed and user should be directed back to the View Course page", () =>{
    editCoursePage.verifyCourseIsUpdatedSuccessfully();
});