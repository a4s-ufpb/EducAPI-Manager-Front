
describe('caso de test do login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
    cy.get('[data-cy=login-button]').click()
    cy.get('[formcontrolname=email]').type("alvaroantoniosbu@gmail.com")
    cy.get('[formcontrolname=password]').type("40028922Pp")
    cy.get('[data-cy=submit]').click()
  })

  it('Deslogado com sucesso', () => {
    cy.get('[data-cy=menu-profile]').click({force:'true'})
    cy.wait(1000);
    cy.get('[data-cy=logout]').click({force:'true'})
    cy.location('pathname').should('include','/home')
  })

})
