// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
    Cypress.Commands.add('setToken', function () {
    const user = {
        email: 'rsppnet2@outlook.com',
        password: 'rsppnet'
    }
    cy.api({
        method: 'POST',
        url: '/sessions',
        body: user
    })
    .then(function (response) {
            expect(response.status).to.eql(200)
            Cypress.env('token', response.body.token)
    })

})

Cypress.Commands.add('back2ThePast', function () {
    const id = '62a14b7ade112000167068b6'
    cy.api({
        method: 'DELETE',
        url: '/back2thepast/' + id
    
    })
        .then(function (response) {
            expect(response.status).to.eql(200)
        })
    
    
    Cypress.Commands.add('postCharacter', function (payload) {
        cy.api({
            method: 'POST',
            url: '/characters',
            body: payload,
            headers: {
                Authorization: Cypress.env('token')
            },
            failOnStatusCode: false
            
        })
            .then(function (response) {
                return response
            })
    })
})