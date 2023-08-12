import TestPageObject from './PageObject.cy'
const pageObject = new TestPageObject


describe('Verify values in the table', function () {
    before(function () {
        // adding up the baseUrl 
        //if env differs we can configure the url in the env
        cy.visit(Cypress.config('baseUrl'))
        //fetching the values from fixture before executing any TC.
        cy.fixture('example').then(data => {
            this.data = data
        })
    })
    it('Add values in the table', function () {
        //entering the date taken from fixture into the text box
        pageObject.tableDataButton().click()
        pageObject.textboxInputValue().clear()
        pageObject.textboxInputValue().type(JSON.stringify(this.data), { parseSpecialCharSequences: false }, { delay: 0 })
        pageObject.refreshTableButton().click()

        //validating all the field values name,age and gender
        cy.validate_all_fieldvalues(pageObject.getNamedetails(), this.data, 'name')
        cy.validate_all_fieldvalues(pageObject.getAgedetails(), this.data, 'age')
        cy.validate_all_fieldvalues(pageObject.getGenderdetails(), this.data, 'gender')
    })
})