const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://hotel-example-site.takeyaqa.dev/en-US",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
