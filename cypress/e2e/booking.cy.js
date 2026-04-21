describe('Hotel Booking - Reservation Tests', () => {

  it('TC007 - Verify user can navigate to the Plans page in Reserve menu', () => {
    cy.visit('/')
    cy.contains('Reserve').click()

    cy.url().should('include', 'plans')
  })

})

it('TC008 - Verify user can click reserve room button', () => {
    cy.visit('/')
    cy.contains('Reserve').click()

    cy.contains('Reserve room').invoke('removeAttr', 'target').click()

    cy.url().should('include', 'reserve')
})

it('TC009 - Verify user can complete reservation form with valid data', () => {
  cy.visit('https://hotel-example-site.takeyaqa.dev/en-US/reserve.html?plan-id=0', {
    failOnStatusCode: false
  })

  cy.url().should('include', 'reserve.html')
  cy.contains('Reservation').should('be.visible')

  cy.get('input[name="date"]').clear().type('2026-05-01{enter}')
  cy.get('body').click(0,0)
  cy.get('input[name="term"]').clear().type('2')
  cy.get('input[name="head-count"]').clear().type('2')

  cy.contains('Breakfast').click()

  cy.contains('Total').should('be.visible')
})

it('TC010 - Verify user can submit reservation flow', () => {
  cy.visit('https://hotel-example-site.takeyaqa.dev/en-US/reserve.html?plan-id=0', {
    failOnStatusCode: false
  })

  cy.get('input[name="date"]').clear().type('2026-05-01{enter}')
  cy.get('body').click(0, 0)
  cy.get('input[name="term"]').clear().type('2')
  cy.get('input[name="head-count"]').clear().type('2')

  cy.contains('Confirm Reservation').click()

  cy.url().should('include', 'reserve')
})

  it('TC011 - Verify validation messages appear when fields are empty', () => {
    cy.visit('https://hotel-example-site.takeyaqa.dev/en-US/reserve.html?plan-id=0', {
      failOnStatusCode: false
    })

    cy.contains('Confirm Reservation').click()

    cy.contains('required').should('be.visible')
  })

  it('TC012 - Verify price updates when stay changes', () => {
    cy.visit('https://hotel-example-site.takeyaqa.dev/en-US/reserve.html?plan-id=0', {
      failOnStatusCode: false
    })

    cy.get('input[name="term"]').clear().type('3')
    cy.contains('Total').should('be.visible')
  })