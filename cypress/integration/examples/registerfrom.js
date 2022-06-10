beforeEach('Launch site', ()=>{
    // to view the diff mobile devices cy.viewport('ipad-mini')
    cy.visit('http://localhost:4200/reg');
  })
  
  it('Interacting with text fields',()=>{
    cy.get('input[formControlName="FirstName"]')
      .type('Sriram')
      .should('have.value','Sriram')
  
    cy.get('input[ formControlName="email"]')
      .type('sriram@gmail.com')
      .should('have.value','sriram@gmail.com')
  
      cy.get('input[formControlName="Mobile"]')
     .type('9848022336')
     .should('have.value','9848022336')
      
     cy.get('input[formControlName="password"]')
     .type('9848022336')
     .should('have.value','9848022336')
  
    cy.get('input[formControlName="repassword"]')
     .type('9848022336')
     .should('have.value','9848022336')
  
     cy.get('.submit-btn').click()

     cy.get('.signbtn').click()
  
  })
  