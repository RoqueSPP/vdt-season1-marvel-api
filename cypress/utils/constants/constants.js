
        const scenarios = [{
            'payload': {
                name: 'Tanos de Titã',
                team: ['x-man', 'marvel'],
                active: true
            },
            'expected_message': '"alias" is required'
        },
        {
            'payload': {
                alias: 'Destruidor de planetas',
                team: ['x-man', 'marvel'],
                active: true
            },
            'expected_message': '"name" is required'
    
        },
        {
            'payload': {
                name: 'Tanos de Titã',
                alias: 'Destruidor de planetas',
                active: true
            },
            'expected_message': '"team" is required'
        },
        {
            'payload': {
                name: 'Tanos de Titã',
                alias: 'Destruidor de planetas',
                team: ['x-man', 'marvel'],
            },
            'expected_message': '"active" is required'
        }
]

export default scenarios;