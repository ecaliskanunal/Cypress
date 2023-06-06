//// <reference types="cypress" />

describe ('My First Tests', () => {
    before( () => {
        //runs once before all test cases in this describe block
        //like beforeClass in TestNG
    })

    beforeEach ( () => {
        //runs before each test case
        //like beforeMethod in TestNG

        //we can clear the cookies so taht we can have a fresh browser
        cy.clearCookies();
    })
 
    after ( () => {
        //runs once after all tests finish
        //simil ar to afterClass in TestNG
    })

    afterEach ( () => {
        //runs after each test case
        //similar to afterMethod in TestNG
    })

    it('Opening a web application', ()=>{
        cy.visit("/registration_form");
        cy.get(':nth-child(41)').click();
        cy.get(':nth-child(1) > .col-sm-5 > .form-control').type('elif');

       
    })
})