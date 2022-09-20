/// <reference types="Cypress" />

import "cypress-axe"
import "@testing-library/cypress/add-commands"

describe("Accessibility tests", () => {
  beforeEach(() => {
      cy.visit("/").get("main")
      cy.injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
})
