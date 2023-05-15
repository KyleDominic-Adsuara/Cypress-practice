describe('Test Cases', () => {
  context('Test Case 1', () =>{
    it('Clicks and Asserts on the correct website', () =>{
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()
      
      cy.url().should('include', '/commands/actions')
    })
  })

  context('Test Case 2', () =>{
    it('Type on the email field', () => {
      cy.visit('https://example.cypress.io/commands/actions')
      cy.get('#email1').type('fake@email.com')
      cy.get('#email1').should('have.value', 'fake@email.com')
    })
  })

  context('Test Case 3', () => {
    it('Console.log each item on the Querying group using each()', () => {
      cy.visit('https://example.cypress.io')
      cy.get('.home-list > li').eq(0).each(($el) => {
        cy.log($el)
      })
    })
  })

  context('Test Case 4', () => {
    it('Use Assertions on the button that is being covered', () => {
      cy.visit('https://example.cypress.io')
      cy.get(':nth-child(3) > ul > :nth-child(6) > a').click()
      cy.get('.action-btn').click()
      cy.get('.action-labels>.label').click({ multiple: true })
      cy.get('.action-opacity>.btn').click({ force: true })
      cy.get('.opacity-cover').should('have.class', 'opacity-cover')
    })
  })

  context('Test Case 5', () =>{
    it('Checks and Unchecks boxes', () => {
      cy.visit('https://example.cypress.io/commands/actions')
      cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
        .check().should('be.checked')
      cy.get('.action-multiple-checkboxes [type="checkbox"]')
        .check(['checkbox1', 'checkbox2', 'checkbox3']).should('be.checked')
      cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
        .uncheck().should('not.be.checked')
      cy.get('.action-multiple-checkboxes [type="checkbox"]')
        .uncheck(['checkbox1', 'checkbox2', 'checkbox3']).should('not.be.checked')
    })
  })

  context('Test Case 6', () => {
    it('Selects an Option', () =>{
      cy.visit('https://example.cypress.io/commands/actions')
      cy.get('.action-select').select('oranges')
        .should('have.value', 'fr-oranges')
    })
  })
  context('Test Case 7', () => {
    it('does something', () =>{
      cy.visit('https://example.cypress.io/commands/actions')
      cy.get('#scroll-horizontal button').scrollIntoView()
        .should('be.visible')
      cy.get('#scroll-vertical button').scrollIntoView()
        .should('be.visible')
      cy.get('#scroll-both button').scrollIntoView()
        .should('be.visible')
    })
  })

  context('Test Case 8', () => {
    it('Navigates to .trigger() and inputs range', () => {
      cy.visit('https://example.cypress.io/commands/actions')
      cy.get('.trigger-input-range')
        .invoke('val', 69)
        .trigger('change')
        .get('input[type=range]').siblings('p')
        .should('have.text', '69')
    })
  })
})