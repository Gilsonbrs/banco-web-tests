describe('Transferencia', () => {
    beforeEach(() => {
        cy.visit('/')

        cy.FazerLoginComCredenciaisValida()

    })
    it('Deve transferir quando informo dados e valor validos', () => {
        //Act
        cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '25.00')

        //Assert
        cy.VerificarMensagemNoToast('Transferência realizada!')

    })
    it('Deve apresentar erro quando transferir mais que 5mil ', () => {
        //Act
        cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '5000.40')

        //Assert
        cy.VerificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})