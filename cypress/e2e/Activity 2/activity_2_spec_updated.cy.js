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

import { buyerDetails } from "../../pages/buyerDetails"
import{ login } from "../../pages/login"


describe('Test Cases', () => {
    beforeEach(() =>{
        cy.visit('https://www.demoblaze.com/index.html')
    })
    context('Login', () =>{
        it('Logins to the site', () =>{
            //cy.login('kad', 'password')
            login.details('kad','password')
             cy.get('#nameofuser').should('contain','Welcome kad')
        })
    })
    context('Signup', () =>{
        it('Signs up to website', () =>{
            cy.get('#signin2').click()
            cy.get('#sign-username')
              .clear()
              .type('somebody')
            cy.get('#sign-password')
              .clear()
              .type('password')
            cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

        })
    })

    context('click on products', () =>{
        it('clicks on products and asserts on the correct domain', () =>{
            login.details('kad','password')
             cy.get('#nameofuser').should('contain','Welcome kad')
            cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
            cy.url().should('include', '/prod.html?idp_=1')
        })
    })

    context('Test on Categories', () =>{
        it('Tests categories found on the homepage', () => {
            login.details('kad','password')
            cy.get('.list-group > .list-group-item').eq(1)
              .click()
            cy.get('.list-group > .list-group-item').eq(1)
              .should('contain','Phones')
            cy.get('.list-group > .list-group-item').eq(2)
              .click()
            cy.get('.list-group > .list-group-item').eq(2)
              .should('contain','Laptops')
            cy.get('.list-group > .list-group-item').eq(3)
              .click()
            cy.get('.list-group > .list-group-item').eq(3)
              .should('contain','Monitors')
        })
    })

    context('Checks headers', () => {
        it('Checks the header', () => {
            login.details('kad','password')
            cy.get('#nava')
              .click()
            cy.url().should('include', '/index')
            cy.get('.navbar-nav > li').eq(0)
              .should('contain', 'Home')
            cy.get('.navbar-nav > li').eq(1)
              .should('contain', 'Contact')
            cy.get('.navbar-nav > li').eq(2)
              .should('contain', 'About us')
            cy.get('#cartur')
              .should('contain', 'Cart')
            cy.get('#logout2')
              .should('contain', 'Log out')
            cy.get('#nameofuser')
              .should('contain', 'Welcome kad')
        })
    })

    context('Add to Cart', () => {
        it('Adds an item to cart and and goes to checkout', () => {
            login.details('kad','password')
            cy.wait(2000)
            buyerDetails.addTocart(1)
            cy.get('#cartur').click()
            buyerDetails.details('Cristiano Ronaldo','Spain','Madrid','CR7','May','2023')
            cy.get('.sweet-alert')
              .should('be.visible')
        })
    })
})
