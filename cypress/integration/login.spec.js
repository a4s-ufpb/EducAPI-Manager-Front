
describe('caso de test do login', () => {
  beforeEach(() => {

    cy.visit('http://localhost:4200/')
    cy.get('[data-cy=login-button]').click()

  })

  it('Logado com sucesso', () => {
    cy.get('[formcontrolname=email]').type("alvaroantoniosbu@gmail.com").should('have.value','alvaroantoniosbu@gmail.com')
    cy.get('[formcontrolname=password]').type("40028922Pp").should('have.value','40028922Pp')
    cy.get('[data-cy=submit]').click()
    cy.location('pathname').should('include','/contexts/list')

  })

  // it('can add new todo items', () => {

  //   const newItem = 'Feed the cat'


  //   cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

  //   cy.get('.todo-list li')
  //     .should('have.length', 3)
  //     .last()
  //     .should('have.text', newItem)
  // })

  // it('can check off an item as completed', () => {

  //   cy.contains('Pay electric bill')
  //     .parent()
  //     .find('input[type=checkbox]')
  //     .check()
  //   cy.contains('Pay electric bill')
  //     .parents('li')
  //     .should('have.class', 'completed')
  // })

  // context('with a checked task', () => {
  //   beforeEach(() => {
  //     cy.contains('Pay electric bill')
  //       .parent()
  //       .find('input[type=checkbox]')
  //       .check()
  //   })

  //   it('can filter for uncompleted tasks', () => {

  //     cy.contains('Active').click()
  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .first()
  //       .should('have.text', 'Walk the dog')
  //     cy.contains('Pay electric bill').should('not.exist')
  //   })

  //   it('can filter for completed tasks', () => {
  //     cy.contains('Completed').click()

  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .first()
  //       .should('have.text', 'Pay electric bill')

  //     cy.contains('Walk the dog').should('not.exist')
  //   })

  //   it('can delete all completed tasks', () => {
  //     cy.contains('Clear completed').click()

  //     // Then we can make sure that there is only one element
  //     // in the list and our element does not exist
  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .should('not.have.text', 'Pay electric bill')

  //     // Finally, make sure that the clear button no longer exists.
  //     cy.contains('Clear completed').should('not.exist')
  //   })
  // })
})
