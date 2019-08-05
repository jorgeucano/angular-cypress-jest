/// <reference types="Cypress" />

it('should visit home', () => {
  cy.visit('http://localhost:4200');
  cy.get('h1').contains('angular-cypress');
});

context('check the home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should visit home', () => {
    cy.get('h1').contains('angular-cypress');
  });

  it('check ul', () => {
    cy.get('ul')
      .children('li')
      .children('h2')
      .children('a')
      .contains('jorgeucano')
      .click()
      .url().should('include', '/jorgeucano')
  })

});
