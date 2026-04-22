class HomePage {
  clickReserveMenu() {
    cy.contains('Reserve').click()
  }

  clickReserveRoomButton() {
    cy.contains('Reserve room')
      .invoke('removeAttr', 'target')
      .click()
  }
}

export default HomePage
