describe ('all check boxes', () => {



    //it.skip = used to skip a block




    it ('This is a dropdown test', () => {
    
    cy.visit('https://zoho.com/commerce/free-demo.html')

   //this page has select tag on the code
    cy.get('#zcf_address_country').select('Uganda') //select from a dropdown
    .should('have.value', 'Uganda')   //have.value is used for normal selector that has select tag
    
    
    
    })
    
    //bootstrap dropdown without select tag

     it('dropwn without select', () => {

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
    
       cy.get('span.select2-selection__rendered#select2-billing_country-container').click()
       
       cy.get('.select2-search__field').type('Niue').type('{enter}')
       cy.get('span.select2-selection__rendered#select2-billing_country-container').should('have.text', 'Niue')
    
    
    
     })
    
    
     it('auto suggestion dropdown', () => {

        cy.visit('https://www.wikipedia.org/')
    
       cy.get('#searchInput').type('nig')

       cy.get('.suggestion-title').contains('Nigerian Civil War').click()
    
    
    
     })
    


     it.only('dynamic dropdown using jquery function', () => {

        cy.visit('https://www.google.com/')
    
       cy.get('#APjFqb').type('nig')  //type nig text

         cy.wait(3000)
       cy.get('div.wM6W7d>span').should('have.length','12') //check number of results

       cy.get('div.wM6W7d>span').each(($el, index, $list)=>{   //use each, capture element, index and list, create a function

          if($el.text()=='nigerian armed forces')    //using if function check if the element contains text

          {
                cy.wrap($el).click();  //wrap and click  on the element


          }
          
          
      })
    
    

        
          //cy.get('#APjFqb').should('contain','nigerian armed forces')
          cy.get('#APjFqb').should('have.value','nigerian armed forces') //assert that search field has the text



    
     })


    
    })