/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {

  beforeEach(() => {
    cy.visit('/'); 
  });

  context('Cenários de Sucesso', function() {
    it('LI-001: Deve fazer login com sucesso usando usuário padrão', function() {
      cy.fixture('users').then((userData) => {
        const standardUser = userData.standard;
        
        cy.get('[data-test="username"]').type(standardUser.username);
        cy.get('[data-test="password"]').type(standardUser.password);
        cy.get('[data-test="login-button"]').click();

        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('have.text', 'Products');
      });
    });
  });

  context('Cenários de Validação e Erro', function() {
    // Mudei o nome do context para ficar mais genérico

    it('LI-002: Deve validar mensagem de erro para usuário bloqueado', function() {
      cy.fixture('users').then((userData) => {
        const lockedOutUser = userData.locked_out;
        cy.get('[data-test="username"]').type(lockedOutUser.username);
        cy.get('[data-test="password"]').type(lockedOutUser.password);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
      });
    });

    it('LI-003: Deve validar mensagem de erro para senha incorreta', function() {
      cy.fixture('users').then((userData) => {
        const standardUser = userData.standard;
        cy.get('[data-test="username"]').type(standardUser.username);
        cy.get('[data-test="password"]').type('senha_errada');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Username and password do not match any user in this service');
      });
    });
    
    it('LI-004: Deve validar mensagem de erro para usuário vazio', function() {
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Username is required');
    });

    it('LI-005: Deve exibir mensagem de erro ao digitar usuário com espaços extras', function() {
      cy.fixture('users').then((userData) => {
        const standardUser = userData.standard;
        const usernameWithSpaces = `   ${standardUser.username}   `;
        cy.get('[data-test="username"]').type(usernameWithSpaces);
        cy.get('[data-test="password"]').type(standardUser.password);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Username and password do not match any user in this service');
      });
    });

    // --- NOSSO NOVO TESTE DE USABILIDADE AQUI ---
    it('LI-006: Deve verificar que o campo de senha está mascarado', function() {
      // Act: Apenas encontramos o elemento de senha
      // Assert: E verificamos seu atributo 'type'
      cy.get('[data-test="password"]').should('have.attr', 'type', 'password');
    });
  });
});