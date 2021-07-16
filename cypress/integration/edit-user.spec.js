
describe('caso de teste de editar usuário', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
    cy.get('[data-cy=login-button]').click()
    cy.get('[formcontrolname=email]').type("usuario@teste.a4s.ufpb.br")
    cy.get('[formcontrolname=password]').type("123456789")
    cy.get('[data-cy=submit]').click()
    cy.get('[data-cy=menu-profile]').click({force:'true'})
    cy.get('[data-cy=edit-profile]').click({force:'true'})
  })

  it('Editar usuário', () => {
    cy.get('[formcontrolname=name]').type("Editado")
    cy.get('[formcontrolname=password]').type("123456789")
    cy.get('[formcontrolname=confirmPassword]').type("123456789")
    cy.get('[data-cy=save-profile]').click({force:'true'})
    cy.location('pathname').should('include','/contexts/list')
    
  })

})
