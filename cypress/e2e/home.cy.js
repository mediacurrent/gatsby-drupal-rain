/// <reference types="Cypress" />

describe('Home page tests', () => {
  it('Server is running', () => {
    cy.visit('http://localhost:8000/')
  })

  it('Header available', () => {
    cy.get('header').should('be.visible').screenshot()
  })

  it('Footer available', () => {
    cy.get('footer').should('be.visible').screenshot()
  })

  it('Dark mode works', () => {
    cy.get('header').find('.chakra-button').click()
    cy.screenshot()
  })
})
