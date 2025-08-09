describe('login', () => {

  beforeEach(() => {
    // Arrange
    cy.visit('http://localhost:4000')
  })

  it('login com dados validos deve permitir entrada no sistema', () => {
    // Act
    cy.get('#username').click().type('Julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('login com dados invalidos deve exibir mensagem de erro', () => {
    // Act
    cy.get('#username').click().type('Julio.lima')
    cy.get('#senha').click().type('654321')
    cy.contains('button', 'Entrar').click()

    // Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})
