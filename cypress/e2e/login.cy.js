describe('Credifit Login', () => {
  // Login com Sucesso
  it('Deve permitir login com sucesso', () => {
    cy.visit('https://admin-develop.credifit.com.br/login');
    cy.get('#login_form_email').type('testes+desafioqa@credifit.com.br');
    cy.get('#login_form_password').type('abcd1234');
    cy.get('.ant-btn').click();
  });
    // Login com E-mail Inválido
    it('Exibe mensagem de erro ao tentar email inválido', () => {
    cy.visit('https://admin-develop.credifit.com.br/login');
    cy.get('#login_form_email').type('desafioqa+testes@credifit.com');
    cy.get('#login_form_password').type('abcd1234');
    cy.get('.ant-btn').click();
    cy.contains('Usuário ou senha incorreto').should('be.visible');

    });
    // Login com Senha Incorreta
    it('Exibe mensagem de erro ao tentar senha incorreta', () => {
   cy.visit('https://admin-develop.credifit.com.br/login');
   cy.get('#login_form_email').type('testes+desafioqa@credifit.com.br');
   cy.get('#login_form_password').type('123');
   cy.get('.ant-btn').click();
   cy.contains('Usuário ou senha incorreto').should('be.visible');
  
      });
   // Login com campos em brancos
   it('Exibe mensagens de erro quando os campos obrigatórios estão em branco', () => {
   cy.visit('https://admin-develop.credifit.com.br/login');
   cy.get('.ant-btn').click();
   cy.contains('Insira seu e-mail').should('be.visible');
   cy.contains('Digite sua senha').should('be.visible');

  });

  // Login com E-mail válido e senha em branco
  it('Exibe mensagem de erro ao tentar login com email válido e senha em branco', () => {
  cy.visit('https://admin-develop.credifit.com.br/login');
  cy.get('#login_form_email').type('testes+desafioqa@credifit.com.br');
  cy.get('.ant-btn').click();
  cy.contains('Digite sua senha').should('be.visible');

});

   // Login com Email em Branco e Senha Válida
it('Exibe mensagem de erro ao tentar login com email em branco e senha válida', () => {
  cy.visit('https://admin-develop.credifit.com.br/login');
  cy.get('#login_form_password').type('abcd1234');
  cy.get('.ant-btn').click();
  cy.contains('Insira seu e-mail').should('be.visible');


});

// Login com Email e Senha Inválidos
it('Exibe mensagem de erro ao tentar login com email e senha inválidos', () => {
  cy.visit('https://admin-develop.credifit.com.br/login');
  cy.get('#login_form_email').type('desafioqa+testes@credifit.com');
  cy.get('#login_form_password').type('123');
  cy.get('.ant-btn').click();
  cy.contains('Usuário ou senha incorreto').should('be.visible');

});
})