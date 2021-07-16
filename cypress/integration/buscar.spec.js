describe('busca', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/contexts/list')
    cy.get('app-nav-bar').contains('search').click()

  })
  it('busca feita',()=>{
    cy.get('input').type("casa").should('have.value','casa')
    cy.get('[data-cy=submit]').click()
  })
})


