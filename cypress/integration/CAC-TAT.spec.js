/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    it('verifica o título da aplicação', function() {
        cy.visit('./scr/index.html')

        cy.title().should('be.equal','Central de Atendimeno ao Cliente TAT')

    })
  })