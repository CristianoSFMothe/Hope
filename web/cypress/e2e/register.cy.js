
/* eslint-disable no-undef */
import data from '../fixtures/orphanages.json'

describe('Cadastro de orfanatos', () => {
  it('deve cadastrar um novo orfanato', () => {
    const orphanage = data.create

    cy.deleteMany({ name: orphanage.name }, { collection: 'orphanages' })

    cy.goto('http://localhost:3000/orphanages/create');

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

    cy.get('.swal2-html-container')
      .should('be.visible')
      .and('have.text', 'Orfanato cadastrado com sucesso.')
  });

  it.only('não deve cadastrar orfanato nome duplicado', () => {
    const orphanage = data.duplicate

    cy.deleteMany({ name: orphanage.name }, { collection: 'orphanages' })
    // Primeiro cadastro
    cy.goto('http://localhost:3000/orphanages/create');

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

    // Segundo cadastro
    cy.goto('http://localhost:3000/orphanages/create');

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

    cy.get('.swal2-html-container')
      .should('be.visible')
      .and('have.text', 'Já existe um cadastro com o nome: ' + orphanage.name)
  });

});