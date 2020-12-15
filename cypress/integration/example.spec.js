describe('TEST DESCRIPTION HERE', () => {

    it('CHECK ENV VARIABLES', () => {
      expect(Cypress.env()).to.include.keys('Url', 'Username', 'Password')
    })
  
    it('FIRST TEST CASE DESCRIPTION', () => {
        cy.visit(Cypress.env('Url'))
    })
  
    // it('SECOND TEST CASE DESCRIPTION', () => {

    // })
  
    // it('THIRD TEST CASE DESCRIPTION', () => {

    // })
})
  