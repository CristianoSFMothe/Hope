/* eslint-disable no-undef */
import data from '../fixtures/orphanages.json';

describe('mapa', () => {
  it('deve visualizar os orfanatos no mapa', () => {
    const orphanage = data.map

    cy.deleteMany({ name: orphanage.name }, { collection: 'orphanages' })

    cy.postOrphanage(orphanage)

    cy.openOrphanage(orphanage.name)

    cy.contains('h1', orphanage.name)
      .should('have.text', orphanage.name)
  });
});