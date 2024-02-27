const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
      mochaFile: "results/results-[hash].xml"
 },
  e2e: {
    baseUrl: 'https://www.demoblaze.com/index.html',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
