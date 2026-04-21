describe('Hotel Booking - Smoke Tests', () => {

  it('TC001 - Verify homepage loads successfully', () => {
    cy.visit('/')
  })

  it('TC002 - Navigation menu is visible', () => {
    cy.visit('/')

    cy.contains('Home').should('be.visible')
    cy.contains('Reserve').should('be.visible')
    cy.contains('Sign up').should('be.visible')
    cy.contains('Login').should('be.visible')
  })

})
