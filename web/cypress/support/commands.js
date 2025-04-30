/* eslint-disable no-undef */
Cypress.Commands.add('goto', (
  url, latitude = Cypress.env('LATITUDE'),
  longitude = Cypress.env('LONGITUDE')) => {
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
