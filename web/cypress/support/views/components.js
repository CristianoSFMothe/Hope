/* eslint-disable no-undef */
const element = require('../elements/popup').popup

Cypress.Commands.add('popupHaveText', (text) => {
  cy.get(element.text)
    .should('be.visible')
    .and('have.text', text)

});