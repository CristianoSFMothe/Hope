const { defineConfig } = require("cypress");
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions');

module.exports = defineConfig({
  projectId: "t5ndpt",
  e2e: {
    setupNodeEvents(on, config) {
      config = cypressBrowserPermissionsPlugin(on, config);

      return config
    },
    env: {
      browserPermissions: {
        geolocation: 'allow',
        notifications: 'allow',
      }
    }
  },
});
