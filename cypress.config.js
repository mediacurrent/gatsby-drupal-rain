const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8000',
    specPattern: "cypress/e2e",
    setupNodeEvents(on, config) {
      if (config.isTextTerminal) {
        return {
          excludeSpecPattern: ['cypress/e2e/all.cy.js', 'cypress/e2e/accessibility.cy.js'],
        }
      }
    },
  },
});
