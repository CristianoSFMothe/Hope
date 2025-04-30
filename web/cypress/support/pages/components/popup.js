/* eslint-disable no-undef */
const element = require('../../elements/popup').popup
class Popup {
  haveText(text) {
    cy.get(element.text)
      .should('be.visible')
      .and('have.text', text)
  }
}

export default new Popup()