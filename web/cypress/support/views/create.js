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

  cy.get(element.inputName).as('fieldName')
  cy.get(element.inputDescription).as('fieldDesc')
  cy.get(element.fileImage).as('fieldImage')
  cy.get(element.openingHours).as('fieldOpenHours')


  orphanage.name ?
    cy.get('@fieldName').type(orphanage.name) :
    cy.log('Empty field name')

  orphanage.description ?
    cy.get('@fieldDesc').type(orphanage.description) :
    cy.log('Empty field description')

  orphanage.image ?
    cy.get(element.fileImage)
      .selectFile('cypress/fixtures/images/' + orphanage.image, { force: true }) :
    cy.log('Empty field image')

  orphanage.opening_hours ?
    cy.get(element.openingHours).type(orphanage.opening_hours) :
    cy.log('Empty field opening hours')

  cy.contains('button', orphanage.open_on_weekends ? 'Sim' : 'Não').click()

  cy.get(element.saveButton).should('be.visible').click({ force: true })
});