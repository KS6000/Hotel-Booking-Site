describe('Hotel Booking - Authentication Tests', () => {

  it('TC003 - Verify user can navigate to Login page', () => {
    cy.visit('/')
    cy.contains('Login').click()

    cy.url().should('include', 'login')
  })

  it('TC004 - Verify login page elements are visible', () => {
    cy.visit('/')
    cy.contains('Login').click()

    cy.get('input').should('be.visible')
    cy.get('button').should('be.visible')
  })

  it('TC005 - Verify user cannot login with invalid credentials', () => {
    cy.visit('/')
    cy.contains('Login').click()

    cy.get('input[type="email"]').type('wrong@test.com')
    cy.get('input[type="password"]').type('wrong123')

    cy.contains('Login').click()

    cy.url().should('include', 'login')
  })

  it('TC006 - Verify login button does not work with empty fields', () => {
    cy.visit('/')
    cy.contains('Login').click()
    cy.contains('Login').click()

    cy.url().should('include', 'login')
  })
})