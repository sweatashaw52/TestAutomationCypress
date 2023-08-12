const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl:'https://testpages.herokuapp.com/styled/tag/dynamic-table.html',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
