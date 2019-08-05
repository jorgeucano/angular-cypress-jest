/// <reference types="Cypress" />

context('check jorgeucano', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/jorgeucano');
  });

  it('should visit jorgeucano page', () => {
    cy.get('h1').contains('angular-cypress');
  });

  it('check p', () => {
    cy.get('p')
      .contains('works!');
  })

});
