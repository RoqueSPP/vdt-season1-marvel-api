

describe('vlidar campos', function () {
    before(function () {
        cy.back2ThePast()
        cy.setToken()
    })
    it('deve validar o campo name', function () {
        const payload = {
            name: "Tanos de Titã",
            team: ['x-man', 'marvel'],
            active: true
        }
        cy.postCharacter(payload)
        .then((response) =>{
            expect(response.status).to.eql(400)
            expect(response.body.error).to.eql('Bad Request')
            expect(response.body.validation.body.message).to.eql('"alias" is required')
                    
            })

    })

    it('deve validar o campo alias', function () {
        const payload = {
            alias: "Destruidor de planetas",
            team: ['x-man', 'marvel'],
            active: true
        }
        cy.postCharacter(payload)
        .then((response) =>{
            expect(response.status).to.eql(400)
            expect(response.body.error).to.eql('Bad Request')
            expect(response.body.validation.body.message).to.eql('"name" is required')
                    
            })

    })

    it('deve validar o campo team', function () {
        const payload = {
            name: "Tanos de Titã",
            alias: "Destruidor de planetas",
            active: true
        }
        cy.postCharacter(payload)
        .then((response) =>{
            expect(response.status).to.eql(400)
            expect(response.body.error).to.eql('Bad Request')
            expect(response.body.validation.body.message).to.eql('"team" is required')
                    
            })

    })
    
    it('deve validar o campo active', function () {
        const payload = {
            name: "Tanos de Titã",
            alias: "Destruidor de planetas",
            team: ['x-man', 'marvel'],
        }
        cy.postCharacter(payload)
        .then((response) =>{
            expect(response.status).to.eql(400)
            expect(response.body.error).to.eql('Bad Request')
            expect(response.body.validation.body.message).to.eql('"active" is required')
                    
            })

        })
    
})