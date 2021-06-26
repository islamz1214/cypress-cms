/// <reference types="cypress" />

describe('jupiter test', () => {
  beforeEach(() => {
    cy.visit('https://jupiter.centralstationmarketing.com/login.php')
  })

  it('should return error message when login is invalid', () => {
    cy.get('input[name="user_name"]').type('someuser')
    cy.get('input[name="password"]').type('somepassword')
    cy.get('input[name="submit"]').click()
    cy.get('td[class="red"]').should('have.text', 'Invalid user id or password ')
  })

})
