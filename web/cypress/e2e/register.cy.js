
/* eslint-disable no-undef */
import data from '../fixtures/orphanages.json'

describe('Cadastro de orfanatos', () => {
  it('deve cadastrar um novo orfanato', () => {
    const orphanage = data.create

    cy.deleteMany({ name: orphanage.name }, { collection: 'orphanages' })
    cy.gotoCreate()
    cy.createOrphanage(orphanage)
    cy.popupHaveText('Orfanato cadastrado com sucesso.')
  });

  it('não deve cadastrar orfanato nome duplicado', () => {
    const orphanage = data.duplicate

    cy.deleteMany({ name: orphanage.name }, { collection: 'orphanages' })
    cy.postOrphanage(orphanage)
    cy.gotoCreate()
    cy.createOrphanage(orphanage)
    cy.popupHaveText('Já existe um cadastro com o nome: ' + orphanage.name)
  });

});