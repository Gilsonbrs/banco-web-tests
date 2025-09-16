describe('login', () => {

  beforeEach(() => {
    // Arrange
    cy.visit('/')
    cy.screenshot('apos-carregar-pagina-de-login')
  })

  it('login com dados validos deve permitir entrada no sistema', () => {
    // Act
    cy.FazerLoginComCredenciaisValida()

    cy.screenshot('apos-clicar-no-botao-entrar')

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('login com dados invalidos deve exibir mensagem de erro', () => {
    // Act
    cy.FazerLoginComCredenciaisInvalida()

    // Assert
    cy.VerificarMensagemNoToast('Erro no login. Tente novamente.')
  })
})
