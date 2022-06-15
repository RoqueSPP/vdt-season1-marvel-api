
import scenarios from '../utils/constants/constants'

describe('vlidar campos', function () {
    before(function () {
        cy.back2ThePast()
        cy.setToken()
    })

    scenarios.forEach(function (scenario) {
        it('validar campos', function () {
            cy.postCharacter(scenario.payload)
                .then(function (response) {
                    expect(response.status).to.eql(400)
                    expect(response.body.error).to.eql('Bad Request')
                    expect(response.body.validation.body.message).to.eql(scenario.expected_message)
                })
        })
    })
    })