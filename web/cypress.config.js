require("dotenv").config();

const { configurePlugin } = require("cypress-mongodb");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      configurePlugin(on)
    },
    specPattern: [
      './cypress/support/hooks/index.cy.js',
      './cypress/e2e/**'
    ],
    baseUrl: process.env.BASE_URL,
    env: {
      baseApi: process.env.BASE_API,
      mongodb: {
        uri: process.env.MONGO_URI,
        database: process.env.DATABASE_NAME,
      }
    }
  },
});
