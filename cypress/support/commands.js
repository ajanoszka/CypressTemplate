// Cypress.Commands.add('login', (username, password) => {
//     cy.log('Sign in')
//     cy.visit(Cypress.env('Url'))
//     cy.get('input[ng-model="form.username"]').should('exist')
//     cy.get('input[ng-model="form.username"]').clear()
//       .type(username)
//     cy.get('input[ng-model="form.password"]').clear()
//       .type(password)
//     cy.get('button[type="submit"]').click()
//     cy.wait(2000)
//     cy.url().should('include', '/dashboard')
//   })