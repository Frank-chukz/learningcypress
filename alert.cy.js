describe ('all check boxes', () => {



    it.skip('simple alert ', () => {
    
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.get("button[onclick='jsAlert()']").click()

    cy.on('window:alert', (t)=>{

        expect(t).to.contains('I am a JS Alert')       

    })

    
    cy.get('#result').should('have.text','You successfully clicked an alert')

    
    
    
     
    
     })


     it.skip('confirmation alert ', () => {


    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')


        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (t)=>{    //used for confirmation of alerts

            expect(t).to.contains('I am a JS Confirm')       
    
        })


        cy.get('#result').should('have.text','You clicked: Ok')





     })


     it.skip ('confirmation alert using cancel button ', () => {


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')


        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (t)=>{    //used for confirmation of alerts

            expect(t).to.contains('I am a JS Confirm')       
    
        })

        cy.on('window:confirm', ()=> false);  //system will use cancel button here

        cy.get('#result').should('have.text','You clicked: Cancel')



    })




    it.skip ('prompt alert ', () => {


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')


        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('VPay')

        });

       cy.get("button[onclick='jsPrompt()']").click();

       cy.on('window:confirm', ()=> false);  //system will use cancel button here

       cy.get('#result').should('have.text','You entered: VPay')

    })




    it ('authenticated alert ', () => {


        cy.visit('https://the-internet.herokuapp.com/basic_auth',  {auth:    //using jason format to pass username and admin parameters
                                                                    {
                                                                        username: "admin", 
                                                                        password: "admin"
                                                                    }
                                                                })




//cy.get("div[class='example'] p").should('have.text', 'Congratulations! You must have the proper credentials.')
cy.get("div[class='example'] p").should('have.contain', 'Congratulations')



    })



    it.only ('authenticated alertn passing parameters on url ', () => {


        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')



//cy.get("div[class='example'] p").should('have.text', 'Congratulations! You must have the proper credentials.')
cy.get("div[class='example'] p").should('have.contain', 'Congratulations')



    })








    })