import { isTypedArray } from "cypress/types/lodash"


describe('post character', function () {

    before(function () {
        cy.back2ThePast()
        cy.setToken()
    })
    it('deve cadastrar um personagens', function () {

        const character = {
            name: "Tanos de Titã",
            alias: "Destruidor de planetas",
            team: ['x-man', 'marvel'],
            active: true
        }
        cy.postCharacter(character)
            .then(function (response) {
                expect(response.status).to.eql(201)
                cy.log(response.body.character_id)
                expect(response.body.character_id.length).to.eql(24)
            })
    })
    

        context('quando o personagem ja existir', function () {
            const character = {
                name: "Magneto",
                alias: "Magnetismo dos metais",
                team: ['x-man', 'marvel'],
                active: true
            }
            before(function () {
                cy.postCharacter(character)
                    .then(function (response) {
                        expect(response.status).to.eql(201)
                        cy.log(response.body.character_id)
                    })
            })
            it('não deve cadastrar duplicado', function () {
                cy.postCharacter(character)
                    .then(function (response) {
                        expect(response.status).to.eql(400)
                        expect(response.body.error).to.eql('Duplicate character')

                    })

            })

        })
})
