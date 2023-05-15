describe('Actions Test', () => {
  context('Visit Actions', () =>{
    it('Goes to Action page', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()

      cy.url().should('include', '/commands/actions')
    })
  })
  context('Type email', () => {
    it('Types emails and asserts it', () => {
      cy.visit('https://example.cypress.io/commands/actions')
      cy.get('#email1').type('fake@email.com')

      cy.get('#email1').should('have.value', 'fake@email.com')
    })
  })
  context('Enter Password', () =>{
    it('Types user password', () => {
      cy.visit('https://example.cypress.io/commands/actions')
      cy.get('.action-focus').focus()
        .should('have.class', 'focus')
        .type('password').should('have.value', 'password')
        .prev().should('have.attr', 'style', 'color: orange;')
    })
  })
  context('Submit Forms', () => {
    it('Submits a form', () => {
      cy.visit('https://example.cypress.io/commands/actions')
      cy.get('.action-form')
        .find('[type="text"]').type('MOMFAT')
      cy.get('.action-form').submit()
        .next().should('contain', 'Your form has been submitted!')
      cy.get('.action-form')
        .find('[type="text"]').clear()
    })
  })

      // cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
      // cy.get('.rightclick-action-input-hidden')
      //   .clear().should('have.value', '')
      //   .type('right click ')

      // cy.get('.navbar-brand').click()
})

// describe('Querying Test', () => {
//   it('Visits Kitchen Sink Querying page', () => {
//     cy.visit('https://example.cypress.io')
//     cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').click()
//     cy.get('.query-btn').should('contain', 'Button')
//       .click()
//     cy.get('.example')
//       .should('have.class','example')

//     cy.get('.query-list').within(() =>{
//       cy.get('.first')
//         .should('contain', 'apples')
//       cy.get('.second')
//         .should('contain', 'oranges')
//     })

//     cy.get(':nth-child(5) > .well').within(() =>{
//       cy.get('#inputEmail').should('have.attr', 'placeholder', 'Email')
//         .type("hello@email.com")
//         .should('have.value','hello@email.com')
//         .clear().should('have.value', '')
//       cy.get('#inputPassword').should('have.attr', 'placeholder', 'Password')
//     })
//     cy.get('.navbar-brand').click()
//   })
// })

// describe('Traversal Testing', () =>{
//   it('Tests Traversal', () => {
//     cy.visit('https://example.cypress.io')
//     cy.get('.home-list > :nth-child(2) > :nth-child(1)').click()
//     cy.get('.traversal-breadcrumb')
//       .children()
//     cy.get('.traversal-list>li')
//       .eq(3).should('contain', 'sphynx')
//     cy.get('.traversal-table td')
//       .last().should('contain', 'Doe')
//     cy.get('.traversal-pagination').find('li').find('a')
//     cy.get('.traversal-next-all').contains('oranges')
//       .nextAll()
//     cy.get('#fruits')
//       .nextUntil('#veggies').should('have.length', 3)
//   })

// })