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

Cypress.Commands.add('postOrphanage', (orphanage) => {
  cy.fixture('images/' + orphanage.image, 'binary')
    .then((image) => Cypress.Blob.binaryStringToBlob(image, 'image/png'))
    .then((blob) => {
      const formData = new FormData();
      formData.append('name', orphanage.name);
      formData.append('description', orphanage.description);
      formData.append('latitude', orphanage.position.latitude);
      formData.append('longitude', orphanage.position.longitude);
      formData.append('opening_hours', orphanage.opening_hours);
      formData.append('open_on_weekends', true);
      formData.append('images', blob, orphanage.image);

      cy.api({
        method: "POST",
        url: "http://localhost:3333/orphanages",
        headers: {
          "Content-type": "multipart/form-data"
        },

        body: formData,
      }).then(response => {
        expect(response.status).to.eq(201);
      });
    })


});
