/* eslint-disable no-undef */
const element = require('../elements/create').create

Cypress.Commands.add('gotoCreate', () => {
  cy.goto('http://localhost:3000/orphanages/create');

  cy.get('legend')
    .should('be.visible')
    .and('have.text', 'Cadastro')
});

Cypress.Commands.add('createOrphanage', (orphanage) => {
  cy.setMapPosition(orphanage.position)
  cy.get(element.inputName).type(orphanage.name)

  cy.get(element.inputDescription).type(orphanage.description)

  cy.get(element.fileImage)
    .selectFile('cypress/fixtures/images/' + orphanage.image, { force: true })

  cy.get(element.openingHours).type(orphanage.opening_hours)

  cy.contains('button', orphanage.open_on_weekends).click()

  cy.get(element.saveButton).should('be.visible').click()
});