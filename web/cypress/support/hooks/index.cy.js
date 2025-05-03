/* eslint-disable no-undef */
describe('Setup', () => {
  before(() => {
    cy.dropCollection('orphanages')
  })

  it('drop successfully', () => {
    cy.log('Collection orphanages dropped successfully')
  });
});