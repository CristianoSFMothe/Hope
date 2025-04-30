
/* eslint-disable no-undef */
import data from '../fixtures/orphanages.json'

describe('Cadastro de orfanatos', () => {
  it('deve cadastrar um novo orfanato', () => {
    const orphanage = data.create

    cy.deleteMany({ name: orphanage.name }, { collection: 'orphanages' })

    cy.visitWithMockGeolocation('http://localhost:3000/orphanages/create');

    cy.get('legend')
      .should('be.visible')
      .and('have.text', 'Cadastro')

    cy.setMapPosition(orphanage.position)

    cy.contains('label', 'Nome')
      .parent()
      .find('input')
      .type(orphanage.name)

    cy.get('#description').type(orphanage.description)

    cy.get('input[type=file]')
      .selectFile("cypress/fixtures/images/kids-playground-1.png", { force: true })

    cy.get('#opening_hours').type(orphanage.opening_hours)

    cy.contains('button', orphanage.open_on_weekends).click()

    cy.get('.save-button').should('be.visible').click()
  });
});


Cypress.Commands.add('visitWithMockGeolocation', (url, latitude = Cypress.env('LATITUDE'), longitude = Cypress.env('LONGITUDE')) => {
  const mockGeolocation = (win, latitude, longitude) => {
    cy.stub(win.navigator.geolocation, 'getCurrentPosition', cb => {
      return cb({ coords: { latitude, longitude } })
    })
  }

  cy.visit(url, {
    onBeforeLoad: (win) => {
      mockGeolocation(win, latitude, longitude);
    }
  })
});

Cypress.Commands.add('setMapPosition', (position) => {
  window.localStorage.setItem('hope-qa:latitude', position.latitude);
  window.localStorage.setItem('hope-qa:longitude', position.longitude);
});