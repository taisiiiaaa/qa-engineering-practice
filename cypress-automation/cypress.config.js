import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "https://practicesoftwaretesting.com",

    specPattern: "cypress/e2e/**/*.cy.js",

    setupNodeEvents(on, config) {
      return config
    },
  },
})
