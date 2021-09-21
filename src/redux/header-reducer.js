const CHANGE_FORM_TEXT = 'CHANGE-FORM-TEXT'

const initialState = {
    top: {
        menu: [{
                id: '1',
                name: 'Оплата и доставка',
                link: '/payment'
            },
            {
                id: '2',
                name: 'О магазине',
                link: '/about'
            },
            {
                id: '3',
                name: 'Новости',
                link: '/news'
            },
            {
                id: '4',
                name: 'Контакты',
                link: '/contacts'
            },
            {
                id: '5',
                name: 'Каталог',
                link: '/category'
            }
        ]
    },
    footer: {
        formField: '',
        mobilePhone: '(067) 417 21 24',
        cardItems: 4,
        contacts: {
            phoneNumbers: [
                '(095) 417 21 24',
                '(067) 977 51 75',
                '(094) 667 96 11'
            ]
        },
        category: [{
                id: '1',
                link: '#',
                value: 'bicycles',
                name: 'Велосипеды'
            },
            {
                id: '2',
                link: '#',
                value: 'brans',
                name: 'Велосипеды по брендам'
            },
            {
                id: '3',
                link: '#',
                value: 'electrictransport ',
                name: 'Электротранспорт'
            },
            {
                id: '4',
                link: '#',
                value: 'bicycleaccessories',
                name: 'Велоаксессуары'
            },
            {
                id: '5',
                link: '#',
                value: 'bicycleparts',
                name: 'Велозапчасти'
            }
        ],
        menu: [
            {
                name: 'bicycles',
                values: [
                    {
                        id: '1',
                        title: 'Велосипеды',
                        values: [{
                                id: '1',
                                name: 'Горные',
                                value: '/category'
                            },
                            {
                                id: '2',
                                name: 'Горные велосипеды с двухподвесной рамой',
                                value: '/category'
                            },
                            {
                                id: '3',
                                name: 'Двухподвесные',
                                value: '/category'
                            },
                            {
                                id: '4',
                                name: 'Детские',
                                value: '/category'
                            },
                            {
                                id: '5',
                                name: 'Женские',
                                value: '/category'
                            },
                            {
                                id: '6',
                                name: 'Складные',
                                value: '/category'
                            },
                            {
                                id: '7',
                                name: 'Горные',
                                value: '/category'
                            },
                            {
                                id: '8',
                                name: 'Горные',
                                value: '/category'
                            },
                            {
                                id: '9',
                                name: 'Шосейные',
                                value: '/category'
                            },
                            {
                                id: '10',
                                name: 'Электровелосипеды',
                                value: '/category'
                            }
                        ]
                    },
                    {
                        id: '2',
                        title: 'По диаметру колеса',
                        values: [{
                                id: '1',
                                name: '12 дюймов',
                                value: '/category'
                            },
                            {
                                id: '2',
                                name: '14 дюймов',
                                value: '/category'
                            },
                            {
                                id: '3',
                                name: '16 дюймов',
                                value: '/category'
                            },
                            {
                                id: '4',
                                name: '18 дюймов',
                                value: '/category'
                            },
                            {
                                id: '5',
                                name: '26 дюймов',
                                value: '/category'
                            },
                            {
                                id: '6',
                                name: '27 дюймов',
                                value: '/category'
                            },
                            {
                                id: '7',
                                name: '29 дюймов',
                                value: '/category'
                            }
                        ]
                    },
                    {
                        id: '3',
                        title: 'По цвету',
                        values: [{
                                id: '1',
                                name: 'Красные',
                                value: '/category'
                            },
                            {
                                id: '2',
                                name: 'Зеленые',
                                value: '/category'
                            },
                            {
                                id: '3',
                                name: 'Белые',
                                value: '/category'
                            },
                            {
                                id: '4',
                                name: 'Оранжевые',
                                value: '/category'
                            },
                            {
                                id: '5',
                                name: 'Синие',
                                value: '/category'
                            }
                        ]
                    },
                    {
                        id: '4',
                        title: 'По материалу рамы',
                        values: [{
                                id: '1',
                                name: 'Алюминий',
                                value: '/category'
                            },
                            {
                                id: '2',
                                name: 'Метал',
                                value: '/category'
                            },
                            {
                                id: '3',
                                name: 'Карбон',
                                value: '/category'
                            }
                        ]
                    },
                    {
                        id: '5',
                        title: 'По цене',
                        values: [{
                                id: '1',
                                name: 'До 4 000 грн',
                                value: '/category'
                            },
                            {
                                id: '2',
                                name: 'До 5 000 грн',
                                value: '/category'
                            },
                            {
                                id: '3',
                                name: 'До 6 000 грн',
                                value: '/category'
                            },
                            {
                                id: '4',
                                name: 'До 7 000 грн',
                                value: '/category'
                            },
                            {
                                id: '5',
                                name: 'До 8 000 грн',
                                value: '/category'
                            },
                            {
                                id: '6',
                                name: 'До 10 000 грн',
                                value: '/category'
                            }
                        ]
                    },
                    {
                        id: '6',
                        title: 'По материалу рамы',
                        values: [{
                                id: '1',
                                name: 'Алюминий',
                                value: '/category'
                            },
                            {
                                id: '2',
                                name: 'Метал',
                                value: '/category'
                            },
                            {
                                id: '3',
                                name: 'Карбон',
                                value: '/category'
                            },
                            {
                                id: '4',
                                name: 'Горные',
                                value: '/category'
                            },
                            {
                                id: '5',
                                name: 'Городские',
                                value: '/category'
                            },
                            {
                                id: '6',
                                name: 'Двухаодвесные',
                                value: '/category'
                            },
                            {
                                id: '7',
                                name: 'Детские',
                                value: '/category'
                            },
                            {
                                id: '8',
                                name: 'Женские',
                                value: '/category'
                            },
                            {
                                id: '9',
                                name: 'Складные',
                                value: '/category'
                            },
                            {
                                id: '10',
                                name: 'Трюковые',
                                value: '/category'
                            },
                            {
                                id: '11',
                                name: 'Фэтбайки',
                                value: '/category'
                            },
                            {
                                id: '12',
                                name: 'Шосейные',
                                value: '/category'
                            },
                            {
                                id: '13',
                                name: 'Электровелосипеды',
                                value: '/category'
                            }
                        ]
                    },
                    {
                        id: '7',
                        title: 'По материалу рамы',
                        values: [{
                                id: '1',
                                name: 'Алюминий',
                                value: '/category'
                            },
                            {
                                id: '2',
                                name: 'Метал',
                                value: '/category'
                            },
                            {
                                id: '3',
                                name: 'Карбон',
                                value: '/category'
                            }
                        ]
                    }
                ]
               
            }
        ]
    }
}

const headerReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_FORM_TEXT:
            return {
                ...state,
                ...state.footer.formField = action.formField
            }
            default:{
                return state
            }

    }
}
export const сhangeFormTextActionCreator = (formField) => {
    return {
        type: CHANGE_FORM_TEXT,
        formField: formField
    }
}

export default headerReducer