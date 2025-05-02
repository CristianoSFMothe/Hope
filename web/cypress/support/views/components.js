/* eslint-disable no-undef */
const element = require('../elements/popup').popup

Cypress.Commands.add('popupHaveText', (text) => {
  cy.get(element.text)
    .should('be.visible')
    .and('have.text', text)
});

Cypress.Commands.add('alertHaveText', (label, text) => {
  cy.contains('label', label)
    .parent()
    .find('small')
    .should('have.text', text)
});