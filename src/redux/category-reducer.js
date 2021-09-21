const initialState = {
    prompts: [{
            id: '1',
            text: 'Го́рный велосипе́д (англ. mountain bike, сокращённо MTB) — велосипед, предназначенный для катания вне дорог.'
        }
        // {id: '2', text: 'Фэтба́йк или фатба́йк (англ. fatbike от fat — «толстый») — разновидность горного велосипеда на широких покрышках (колёсах).'},
        // {id: '3', text: 'Электр́ический велосип́ед (Электровелосипед, пауэрбайк, e-bike, pedelec  (англ.)) представляет собой велосипед с электрическим приводом, который частично или полностью обеспечивает его движение.'}
    ],
    form: {
        popular: [{
                id: '1',
                name: 'Горные до 5000 грн',
                link: '#'
            },
            {
                id: '2',
                name: 'Горные детские',
                link: '#'
            },
            {
                id: '3',
                name: 'Складные горные велосипеды',
                link: '#'
            }
        ],
        types: [{
                id: '1',
                name: 'горные',
                value: 'mountain '
            },
            {
                id: '2',
                name: 'туристические',
                value: 'tourist'
            },
            {
                id: '3',
                name: 'городские',
                value: 'city'
            },
            {
                id: '4',
                name: 'круизные',
                value: 'cruise'
            },
            {
                id: '5',
                name: 'с электромотором',
                value: 'electricMotor'
            },
            {
                id: '6',
                name: 'складные',
                value: 'folding'
            },
            {
                id: '7',
                name: 'шоссейные',
                value: 'road'
            },
            {
                id: '8',
                name: 'гравийные',
                value: 'gravel'
            },
            {
                id: '9',
                name: 'циклокроссовые',
                value: 'cyclocross'
            }
        ],
        sizes: [{
                id: '1',
                name: 'XXS (Ваш рост 130-145 см)'
            },
            {
                id: '2',
                name: 'XS (Ваш рост 140-155 см)'
            },
            {
                id: '3',
                name: 'S (Ваш рост 150-165 см)'
            },
            {
                id: '4',
                name: 'M (Ваш рост 160-175 см)'
            },
            {
                id: '5',
                name: 'L (Ваш рост 170-185 см)'
            },
            {
                id: '6',
                name: 'XL (Ваш рост 180-195 см)'
            },
            {
                id: '7',
                name: 'XXL (Ваш рост от 190 см)'
            }
        ],
        wheelDiameter: [{
                id: '1',
                name: '12'
            },
            {
                id: '2',
                name: '14'
            },
            {
                id: '3',
                name: '20'
            },
            {
                id: '4',
                name: '22'
            },
            {
                id: '5',
                name: '24'
            },
            {
                id: '6',
                name: '26'
            },
            {
                id: '7',
                name: '29'
            }
        ],
        frameMaterial: [{
                id: '1',
                name: 'Алюминий'
            },
            {
                id: '2',
                name: 'Хромоль (CrMo)'
            },
            {
                id: '3',
                name: 'Сталь'
            },
            {
                id: '4',
                name: 'Сталь Hi Ten'
            }
        ],
        brakeType: [{
                id: '1',
                name: 'Барабанные'
            },
            {
                id: '2',
                name: 'Ободные'
            },
            {
                id: '3',
                name: 'Дисковые'
            },
        ],
        year: [{
                id: '1',
                name: '2021'
            },
            {
                id: '2',
                name: '2020'
            },
            {
                id: '3',
                name: '2019'
            },
            {
                id: '4',
                name: '2018'
            },
            {
                id: '5',
                name: '2017'
            },
            {
                id: '6',
                name: '2016'
            },
            {
                id: '7',
                name: '2015'
            },
            {
                id: '8',
                name: '2014'
            },
            {
                id: '9',
                name: '2013'
            },
            {
                id: '10',
                name: '2012'
            },
            {
                id: '11',
                name: '2011'
            }
        ],
        brand: [{
                id: '1',
                name: 'Apollo'
            },
            {
                id: '2',
                name: 'Atlantic'
            },
            {
                id: '3',
                name: 'Author'
            },
            {
                id: '4',
                name: 'Azimut'
            },
            {
                id: '5',
                name: 'BH'
            },
            {
                id: '6',
                name: 'BerGaMont'
            },
            {
                id: '7',
                name: 'Bianchi'
            },
            {
                id: '8',
                name: 'Bottecchia'
            },
            {
                id: '9',
                name: 'Bulls'
            },
            {
                id: '10',
                name: 'Camaro'
            },
            {
                id: '11',
                name: 'Cannon'
            },
            {
                id: '12',
                name: 'Champiоn'
            },
            {
                id: '13',
                name: 'Corratec'
            },
            {
                id: '14',
                name: 'Corso'
            }
        ],
        depreciationType: [{
                id: '1',
                name: 'Хардтейл'
            },
            {
                id: '2',
                name: 'Без амортизации '
            },
            {
                id: '3',
                name: 'Двухподвес'
            },
            {
                id: '4',
                name: 'Задняя'
            }
        ]
    }
}

const categoryReducer = (state = initialState, action = {}) => {
    return state
}


export default categoryReducer