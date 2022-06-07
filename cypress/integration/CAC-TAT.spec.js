/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function(){
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })
    it('Preenche os campos obrigatórios e envia o formulário', function(){
        cy.get('#firstName').type('Carlos')
        cy.get('#lastName').type('Nizolli')
        cy.get('#email').type('carlosnizolli@gmail.com')
        cy.get('#open-text-area').type('Esse é um texto de teste')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
    it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Carlos')
        cy.get('#lastName').type('Nizolli')
        cy.get('#email').type('carlosnizolli')
        cy.get('#open-text-area').type('Esse é um texto de teste com erro no e-mail')
        cy.get('button[type="submit"]').click()
        cy.get('span[class="error"]').should('be.visible')
    })
    it('Campo de telefone só aceita números', function(){
        cy.get('#phone').type('abc').should('have.value', '')
    })
  })