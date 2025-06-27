/// <reference types="cypress" />

/**
 * @description Comando para fazer login na aplicação
 * @param {string} username - O nome de usuário para o login
 * @param {string} password - A senha para o login
 */
Cypress.Commands.add('login', (username, password) => {
  // O cy.session é um comando avançado que guarda a sessão (cookies, etc.)
  // Isso faz com que os próximos testes não precisem logar pela UI de novo,
  // tornando a suíte de testes MUITO mais rápida.
  cy.session([username, password], () => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    // A verificação de que o login deu certo fica aqui dentro da sessão
    cy.url().should('include', '/inventory.html');
  });
});