/* eslint-disable no-undef */
// const element = require('../elements/map').map
const element = require('../elements/map').map

Cypress.Commands.add('openOrphanage', (name) => {
  cy.goto('/map')

  cy.get(element.orphanageIcon).as('mapList')

  cy.get('@mapList')
    .each((ele, index, list) => {
      cy.get('@mapList')
        .eq(index)
        .click({ force: true })
      cy.wait(1000)

      cy.get(element.orphanageContent).as('divName')

      cy.get('@divName')
        .invoke('text')
        .then((txt) => {
          cy.log(txt)
          if (txt === name) {
            cy.get('@mapList')
              .eq(index)
              .as('foundItem')
          }
        })
    })

  cy.get('@foundItem')
    .click({ force: true })

  cy.contains(element.orphanageContent, name)
    .should('be.visible')
    .find('a')
    .click({ force: true })
});