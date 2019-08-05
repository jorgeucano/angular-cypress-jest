/// <reference types="Cypress" />

context('check lazy', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should visit home', () => {
    cy.get('h1').contains('angular-cypress');
  });

  it('check click and loader', () => {
    cy.get('#forClick')
      .click()
      .get('app-img > img');
  })

});
