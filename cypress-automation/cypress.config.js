import { defineConfig } from "cypress"

export default defineConfig({
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/results",
    reportFilename: "report",
    overwrite: false,
    html: false,
    json: true,
    consoleReporter: "spec",
  },

  e2e: {
    baseUrl: "https://practicesoftwaretesting.com",

    specPattern: "cypress/e2e/**/*.cy.js",

    setupNodeEvents(on, config) {
      return config
    },
  },
})
