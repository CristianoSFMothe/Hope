import popup from "../components/popup";
// const element = require('../../elements/create').create
const element = require('../../elements/create').create

/* eslint-disable no-undef */
class CreatePage {

  constructor() {
    this.popup = popup;
  }

  go() {
    cy.goto('http://localhost:3000/orphanages/create');

    cy.get('legend')
      .should('be.visible')
      .and('have.text', 'Cadastro')
  }

  form(orphanage) {
    cy.contains('label', 'Nome')
      .parent()
      .find('input')
      .type(orphanage.name)

    cy.get(element.inputDescription).type(orphanage.description)

    cy.get(element.fileImage)
      .selectFile('cypress/fixtures/images/' + orphanage.image, { force: true })

    cy.get(element.openingHours).type(orphanage.opening_hours)

    cy.contains('button', orphanage.open_on_weekends).click()
  }

  submit() {
    cy.get(element.saveButton).should('be.visible').click()
  }

  postOrphanage(orphanage) {
    cy.postOrphanage(orphanage)
  }

  delete(name, collection) {
    cy.deleteMany({ name: name }, { collection: collection })
  }
}

export default new CreatePage();