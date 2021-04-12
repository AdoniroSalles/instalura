<reference types="cypress" />

describe('/pages/app/login', () => {
     it('preencha os campos e vá para a página de /app/perfil', () => {
          cy.visit('/app/login/') // vai para pagina de login
          cy.get('#formCadastro input[name="usuario"]').type('adoniro')  // preencher o input usuario
          cy.get('#formCadastro input[name="senha"]').type('senhasegura')   // preencher o input senha
          cy.get('#formCadastro button[type="submit"]').click()    // clicar no botão de submit
          cy.url().should('include', '/app/profile'); // verifica se a pagina esta correta
     })
})