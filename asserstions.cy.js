it ('Testimg different asserstions', () => {


     cy.visit ('alpha.vpay.africa')

    // cy.get('.mobile-app').should('exist')

     cy.contains('Login').click()

    // cy.url().should('include','vpay') //used to capture url
    // .and('not.contain','imanS')//not contain assertion

    // cy.title().should('include','VPay')

    // cy.xpath('//a').should('have.length', '2') //checks all links presents

    // cy.get('[type="text"]').type('tehi')

    // cy.get('[type="text"]').should('have.value', 'tehi')  //assert that input field have value tehi

    /*
        ALL OF THE ABOVE ARE IMPLICIT ASSERTIONS
    */
    
    
//EXPLICIT ASSERTIONS

//BDD APPROACH
cy.get('[type="text"]').type('tehi@givmail.com')

cy.get('[type="password"]').type('897$312Game')

cy.get('.app-button').click()

cy.get('.tour-triangle-right > .d-flex > .c-pointer').click() // close tour


let expName = "Tehila Company";

cy.get('.merchant-name.text-cut').then(  (x) => {

            let actName = x.text()

        //BDD APPROACH
       expect(actName).to.equal(expName)

        //expect(actName).to.not.equal(expName) //negative assertion

    

    //TDD APPROACH

        assert.equal(actName,expName)

        //assert.not.equal(actName,expName) //negative assertion



    })




})