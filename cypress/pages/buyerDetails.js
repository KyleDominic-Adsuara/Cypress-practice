export const buyerDetails = {
    details: (name,country,city,card,month,year) => {
        cy.get('.col-lg-1 > .btn').click({force : true})
        cy.get('#name')
          .should("be.visible")
          .clear()
          .type(name, {force:true})
          .should('have.value', name)
        cy.get('#country')
          .clear()
          .type(country, {force:true})
          .should('have.value', country)
        cy.get('#city')
          .clear()
          .type(city, {force:true})
          .should('have.value', city)
        cy.get('#card')
          .clear()
          .type(card)
          .should('have.value', card)
        cy.get('#month')
          .clear()
          .type(month, {force:true})
          .should('have.value', month)
        cy.get('#year')
          .clear()
          .type(year, {force:true})
          .should('have.value', year)
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    },

    addTocart: (args) => {
      cy.get(`:nth-child(${args}) > .card > .card-block > .card-title > .hrefch`).click()
      cy.get('.col-sm-12 > .btn').click({force : true})
      // cy.get('#cartur').click()
      cy.get('#nava')
        .click()
    }
}