describe('login', () => {

    //Arrange
  it('login com dados validos deve permitir entrada no sistema', () => {

    //Act
    cy.visit('http://localhost:4000')
    cy.get('#username').click().type('Julio.lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()
    
    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')

  })
})