const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    videoFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    setupNodeEvents(on, config) {
      // implement node event listeners here


    },
  },
});
