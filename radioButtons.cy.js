describe ('all check boxes', () => {

it ('This is a check box test', () => {

cy.visit('https://itera-qa.azurewebsites.net/home/automation')

cy.get('input#male')
.should('be.visible')


cy.get('input#female')
.should('be.visible')

cy.get('input#female').check().should('be.checked')  //select a checkbox and check if its checked
cy.get('input#male').should('not.be.checked')


})


it.only ('This is a check box test', () => {

    cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    
    cy.get('input#monday').should('be.visible')

    cy.get('input#monday').check().should('be.checked')

    cy.get('input#monday').uncheck().should('not.be.checked') //unchecking element

//selecting all check boxes

cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')

cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked')  //select first checkbox
cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked')
cy.get('input.form-check-input[type="checkbox"]').eq(3).check().should('be.checked')



})





})