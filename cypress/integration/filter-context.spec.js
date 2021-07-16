describe('caso de test para filtro de contextos', () => {
  beforeEach(() => {

    cy.visit('http://localhost:4200/')
    cy.get('[data-cy=login-button]').click()
    cy.get('[formcontrolname=email]').type("alvaroantoniosbu@gmail.com")
    cy.get('[formcontrolname=password]').type("40028922Pp")
    cy.get('[data-cy=submit]').click()

    cy.get('[data-cy=filter-button]').click()
  })

  it('Filtrando Por email', () => {
    cy.get('[data-cy=filter-email]').type("amandaam@gmail.com").should('have.value','amandaam@gmail.com')
    cy.get('[data-cy=filter-save]').click()

    cy.get('mat-card-subtitle').should(($div) => {

      expect($div.get(0).innerText).to.eq('amandaam')
    })

  })
})
