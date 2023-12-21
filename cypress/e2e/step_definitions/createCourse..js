import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";
import { createCoursePage } from "@pages/CreateCoursePage";

Given ("A user is logged in and on the Add New Course page", () => {
    loginPage.visitQualesApp();
    loginPage.typeCorrectEmailAddressAndCorrectPassword();
    loginPage.clickLoginButton();
    createCoursePage.clickAddCourseButton();
}) 

When ("The user provides the following mandatory details to add a new course.--Title, Descritpion, Category, Location-- and submits the form", () =>{
    createCoursePage.changeThePageView(); //Alternatively, {force: true}) can be used to force cypress to type into the field
    createCoursePage.fillTheAddCourseFormWithMandatoryFields();
    createCoursePage.clickTheSubmitButton();
})

Then ("User should receive a success toast and be redirected to the List of Courses page", () => {
    createCoursePage.verifySuccessfulCourseCreation();
});

When ("The user submits the forms without providing any of the mandatory fields", () => {
    createCoursePage.clickTheSubmitButton();
});

Then ("The form should not be submitted and error message should be displayed for each compulsory field", () => {
    createCoursePage.changeThePageView();
    createCoursePage.verifyUserRemainsOnTheCreateCoursePageForUnsuccessfulCourseCreationAttempt();
    createCoursePage.verifyErrorToastandErrorValdiationForUnsuccessfulCourseCreationIsDisplayed();
});