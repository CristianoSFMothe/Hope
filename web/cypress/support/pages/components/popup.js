/* eslint-disable no-undef */
class Popup {
  haveText(text) {
    cy.get('.swal2-html-container')
      .should('be.visible')
      .and('have.text', text)
  }
}

export default new Popup()