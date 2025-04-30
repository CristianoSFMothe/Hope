
/* eslint-disable no-undef */
import data from '../fixtures/orphanages.json'
import createPage from '../support/pages/create'
import mapPage from '../support/pages/map'

describe('Cadastro de orfanatos', () => {
  it('deve cadastrar um novo orfanato', () => {
    const orphanage = data.create

    createPage.delete(orphanage.name, 'orphanages')

    createPage.go()

    cy.setMapPosition(orphanage.position)

    createPage.form(orphanage)

    createPage.submit()

    mapPage.popup.haveText('Orfanato cadastrado com sucesso.')

  });

  it('não deve cadastrar orfanato nome duplicado', () => {
    const orphanage = data.duplicate

    createPage.delete(orphanage.name, 'orphanages')

    createPage.postOrphanage(orphanage)

    createPage.go()

    cy.setMapPosition(orphanage.position)

    createPage.form(orphanage)

    createPage.submit()

    mapPage.popup.haveText('Já existe um cadastro com o nome: ' + orphanage.name)

  });

});