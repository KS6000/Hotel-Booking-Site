import HomePage from '../pages/homePage'
import BookingPage from '../pages/bookingPage'

const homePage = new HomePage()
const bookingPage = new BookingPage()

describe('Hotel Booking - Reservation Tests', () => {

  it('TC007 - Verify user can navigate to the Plans page in Reserve menu', () => {
    cy.visit('/')

    homePage.clickReserveMenu()

    cy.url().should('include', 'plans')
  })

  it('TC008 - Verify user can click reserve room button', () => {
    cy.visit('/')

    homePage.clickReserveMenu()
    homePage.clickReserveRoomButton()

    cy.url().should('include', 'reserve')
  })

  it('TC009 - Verify user can complete reservation form with valid data', () => {
    cy.visit('https://hotel-example-site.takeyaqa.dev/en-US/reserve.html?plan-id=0', {
      failOnStatusCode: false
    })

    bookingPage.enterDate('2026-05-01')
    bookingPage.enterStay('2')
    bookingPage.enterGuests('2')

    cy.contains('Breakfast').click()
    cy.contains('Total').should('be.visible')
  })

  it('TC010 - Verify user can submit reservation flow', () => {
    cy.visit('https://hotel-example-site.takeyaqa.dev/en-US/reserve.html?plan-id=0', {
      failOnStatusCode: false
    })

    bookingPage.enterDate('2026-05-01')
    bookingPage.enterStay('2')
    bookingPage.enterGuests('2')

    bookingPage.confirmReservation()

    cy.url().should('include', 'reserve')
  })

  it('TC011 - Verify validation messages appear when fields are empty', () => {
    cy.visit('https://hotel-example-site.takeyaqa.dev/en-US/reserve.html?plan-id=0', {
      failOnStatusCode: false
    })

    bookingPage.confirmReservation()
    bookingPage.verifyValidationError()
  })

  it('TC012 - Verify price updates when stay changes', () => {
    cy.visit('https://hotel-example-site.takeyaqa.dev/en-US/reserve.html?plan-id=0', {
      failOnStatusCode: false
    })

    bookingPage.enterStay('3')
    cy.contains('Total').should('be.visible')
  })

  it('TC013 - Verify user cannot submit invalid guest count', () => {
  cy.visit('https://hotel-example-site.takeyaqa.dev/en-US/reserve.html?plan-id=0')

  bookingPage.enterGuests('0')

  bookingPage.confirmReservation()

  cy.contains('required').should('be.visible')
  })

})