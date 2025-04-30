import popup from "../components/popup";

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

    cy.get('#description').type(orphanage.description)

    cy.get('input[type=file]')
      .selectFile("cypress/fixtures/images/kids-playground-1.png", { force: true })

    cy.get('#opening_hours').type(orphanage.opening_hours)

    cy.contains('button', orphanage.open_on_weekends).click()
  }

  submit() {
    cy.get('.save-button').should('be.visible').click()
  }

  postOrphanage(orphanage) {
    cy.postOrphanage(orphanage)
  }

  delete(name, collection) {
    cy.deleteMany({ name: name }, { collection: collection })
  }
}

export default new CreatePage();