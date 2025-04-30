const { configurePlugin } = require("cypress-mongodb");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "t5ndpt",
  e2e: {
    setupNodeEvents(on, config) {
      configurePlugin(on)

      config.env.mongodb = {
        uri: config.env.MONGO_URI || '',
        database: config.env.MONGO_DATABASE || '',
      };

      return config;
    },
  },
});
