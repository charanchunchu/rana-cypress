context('Navigation', () => {
    it('can navigate around the website', () => {
      cy.visit('http://localhost:4200/home');
      cy.visit('http://localhost:4200/login');
      cy.visit('http://localhost:4200/about-us');
      cy.visit('http://localhost:4200/contact-us');
      cy.visit('http://localhost:4200/graphs');
      cy.visit('http://localhost:4200/registration');
      cy.visit('http://localhost:4200/add-user');
      cy.visit('http://localhost:4200/user');
      cy.visit('http://localhost:4200/life-cycle');
      cy.visit('http://localhost:4200/parent');
      cy.visit('http://localhost:4200/youtube');
      cy.visit('http://localhost:4200/sort');
      cy.visit('http://localhost:4200/angulargrid');
  
    });
  })
  