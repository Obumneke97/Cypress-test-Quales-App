class EditCoursePage {
    elements = {
        titleInputField: () => cy.get('[data-testid="Title*"]'),
        descriptionInputField: () => cy.get('[data-testid="Description*"]'),
        selectedCategory: () => cy.get('#demo-simple-select'),
        imageUrlInputField: () => cy.get('[data-testid="ImageURL"]'),
        isPremiumCheckbox: () => cy.get('[data-testid="isPremium"]'),
        onlineRadioButton: () => cy.get('[data-testid="online"]'),
        offlineRadioButton: () => cy.get('[data-testid="offline"]'),
        //selectedMode: () => ,
        courseUrlInputField: () => cy.get('[data-testid="CourseURL*(mustbeyoutube)"]'),
        addressInputField: () => cy.get('[data-testid="Address*"]'),
        updateCourseBtn: () => cy.get('.css-tzsjye > .MuiButton-root'),
        backButton: () => cy.get('.MuiGrid-root > .MuiButtonBase-root'),
    }

}

const courseDetails = {
    title: "try try try",
    description: "prrrractice",
    category: "Quality Assurance",
    isPremium: false,
    imageUrl: "https://source.unsplash.com/user/c_v_r/900x800",
    location: "online",
    courseUrl: "https://www.youtube.com/watch?v=8vXoMqWgbQQ",
};

export default courseDetails; 