class BookingPage {
  enterDate(date) {
    cy.get('input[name="date"]').clear().type(date + '{enter}')
    cy.get('body').click(0 , 0)
  }

  enterStay(days) {
    cy.get('input[name="term"]').clear().type(days) 
  }

  enterGuests(count) {
    cy.get('input[name="head-count"]').clear().type(count)
  }

  confirmReservation() {
    cy.contains('Confirm Reservation').click()
  }

  verifyValidationError() {
    cy.contains('required').should('be.visible')
  }
}

export default BookingPage