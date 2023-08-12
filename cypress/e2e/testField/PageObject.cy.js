class TestPageObject {
    // Adding up all the locators in the class 
    // can be access be creating the object
    tableDataButton() {
        return cy.contains("Table Data")
    }
    textboxInputValue() {
        return cy.get('textarea')
    }
    refreshTableButton() {
        return cy.get('#refreshtable')
    }

    getNamedetails() {
        return "table tr td:nth-child(1)"
    }
    getAgedetails() {
        return "table tr td:nth-child(2)"
    }
    getGenderdetails() {
        return "table tr td:nth-child(3)"
    }
}
export default TestPageObject