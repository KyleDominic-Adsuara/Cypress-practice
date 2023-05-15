export const login = {
    details: (username, password) => {
        cy.get('#login2').click()
        cy.get(".modal-content>.modal-header")
          .should("contain", "Log in")
        cy.get('#loginusername')
        // cy.get('[type = text]').eq(3)
          .should("be.visible")
          .clear()
          .type(username, {force:true})
          .should('have.value', username)
        cy.get('#loginpassword')
          .should("be.visible")
          .clear()
          .type(password, {force:true})
          .should('have.value', password)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
          .click()
    }
}