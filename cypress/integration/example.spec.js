describe('TEST OF www.phptravels.net SITE', () => {

    before('CHECK ENV VARIABLES', () => {
      expect(Cypress.env()).to.include.keys('Url', 'Username', 'Password')
    })

    it('CHECK ENV VARIABLES', () => {
      expect(Cypress.env()).to.include.keys('Url', 'Username', 'Password')
    })
  
    it('VISIT MAIN PAGE', () => {
        cy.visit(Cypress.env('Url'))
    })
  
    it('SEARCH FOR FLIGHT', () => {
        cy.findFlight()
    })
})
  