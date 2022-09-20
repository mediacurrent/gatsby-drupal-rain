/// <reference types="Cypress" />

describe('Article page tests', () => {
  it('Server is running', () => {
    cy.visit('http://localhost:8000/')
  })

  it('Article title is clickable', () => {
    cy.get('section').first().contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit').click()
  })

  it('Article contains body content', () => {
    cy.get('section').first().contains('Integer et ante eu nisl finibus molestie.').screenshot()
  })
})
