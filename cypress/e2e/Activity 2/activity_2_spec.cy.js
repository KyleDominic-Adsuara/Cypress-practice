// # Activity

// Website URL: https://www.demoblaze.com/index.html

// Create Tests on this [website](https://www.demoblaze.com/index.html).

// 1. Test Login
// 2. Test Sign Up

// Tests from here on should be logged in as user

// 3. Click on Products and assert on correct landing page.
// 4. Test on Categories found on the Home Page.
// 5. Check Headers.

// 6. Add to cart and checkout (use POM)

describe('Test Cases', () => {
    beforeEach(() =>{
        cy.visit('https://www.demoblaze.com/index.html')
    })
    context('Login', () =>{
        it('Logins to the web', () =>{
            cy.login('kad', 'password')
            // cy.get('#narvbarx').should('contain', 'Welcome kad')
            // cy.get('#login2').click()
            // cy.get('#loginusername').type('kadsuara')
            // cy.get('#loginpassword').type('password')
            // cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        })
    })
    context('Signup', () =>{
        it('Signs up to website', () =>{
            cy.get('#signin2').click()
            cy.get('#sign-username').type('kadsuara')
            cy.get('#sign-password').type('password')
            cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

        })
    })

    context('click on products', () =>{
        it('clicks on products and asserts on the correct domain', () =>{
            cy.get('#login2').click()
            cy.get('#loginusername').type('kad')
            cy.get('#loginpassword').type('password')
            cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
            cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
            cy.url().should('include', '/prod.html?idp_=1')
        })
    })
})
