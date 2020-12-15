Cypress.Commands.add('findFlight', () => {
    cy.log('Go to Flights tab')
    cy.get('a[data-name=flights]').click()

    cy.log('Select First class')
    cy.get('.flightclass .chosen-container-single-nosearch span').click()
    cy.get('[data-option-array-index="0"]').contains('First').click()

    cy.log('Select From (BVH)')
    cy.get('#s2id_location_from').click()
    cy.get('#select2-drop > .select2-search > .select2-input').type('BVH', {force: true})
    cy.get('div#select2-drop > .select2-results').contains('(BVH)').click()

    cy.log('Select To (Assis)')
    cy.get('#s2id_location_to').click()
    cy.get('div#select2-drop  .select2-input').type('AIF', {force: true})
    cy.get('div#select2-drop > .select2-results').contains('(AIF)').click()

    cy.log('Select Departure date')
    cy.get('input#FlightsDateStart').click().type('2020-12-15', {force: true})

    cy.log('Click Search')
    cy.get('.col-lg-1 > .btn-primary').click()
    cy.url().should('include', '/flights/search/BVH/AIF/oneway/first/2020-12-15/1/0/0')
  })