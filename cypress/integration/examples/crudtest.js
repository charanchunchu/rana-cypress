it('navigates', () => {
    cy.visit('http://localhost:4200/user')

    cy.get('#addnew').click()
     
    cy.get('input[formControlName="name"]')
      .type('sri ram')

    
    cy.get('input[formControlName="Mobile"]')
      .type('7207586747')
  
    cy.get('input[formControlName="email"]')
      .type('srirama@gmail.com')
  
  
      cy.get('select[formControlName="gender"]')
      .select('Male')
      .should('have.value', 'Male')
  
      cy.get('input[formControlName="userType"]')
      .check()
  
      cy.get('.save-btn').click()
  
      cy.get('#editbtn').click()
  
      cy.get('input[formControlName="name"]')
      .type('sri ram')
  
      cy.get('input[formControlName="Mobile"]')
      .type('85252525252')

      cy.get('input[formControlName="email"]')
      .type('rama@gmail.com')

      cy.get('select[formControlName="gender"]')
      .select('Male')
      .should('have.value', 'Male')
      cy.get('input[formControlName="userType"]')
      .check()
      cy.get('.save-btn').click()
  })
  