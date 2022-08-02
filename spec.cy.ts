import { expect } from "chai"
import cypressConfig from "cypress.config"

describe('Recruitment Test Case', () => {
  it('Visit the Pay Mi Website', () => {
    cy.visit('https://staging.paymi.com/users/sign_in')

  })
  
  it('Register', () => {
    cy.visit('https://staging.paymi.com/users/sign_in')

    cy.contains('Create an account').click()

    cy.url().should('include', '/users/sign_up')

    cy.contains('Email').type('test@email.com')

    cy.contains('Password').type('Password1234')

    cy.contains('I agree to Paymi').click('left')

//Cypress does not find the Sign in button on the pay mi website, thus I commanded it to click a button//
    cy.get('.btn').click()

  })

  it('Log in', () => {
    cy.visit('https://staging.paymi.com/users/sign_in')

    cy.contains('Email').type('test@email.com')

    cy.contains('Password').type('Password1234')

    //cy.contains('Sign in').click()  works here unlike in registration//
    cy.get('.btn').click()

  })
})