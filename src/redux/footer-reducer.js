import facebook from '../assets/footer/facebook.svg'
import instagram from '../assets/footer/instagram.svg'
import youtube from '../assets/footer/youtube.svg'


const initialState = {
    socials: [{
            id: '1',
            image: facebook,
            link: '#',
            alt: 'Фейсбук'
        },
        {
            id: '2',
            image: instagram,
            link: '#',
            alt: 'Инстаграм'
        },
        {
            id: '3',
            image: youtube,
            link: '#',
            alt: 'Ютуб'
        }
    ],
    catalog: {
        title: 'каталог велосипедов',
        list: [{
                id: '1',
                name: 'Каталог велосипедов',
                link: '#'
            },
            {
                id: '2',
                name: 'Горные велосипеды',
                link: '#'
            },
            {
                id: '3',
                name: 'женские велосипеды',
                link: '#'
            },
            {
                id: '4',
                name: 'двухподвестные велосипеды',
                link: '#'
            },
            {
                id: '5',
                name: 'городские велосипеды',
                link: '#'
            }
        ]
    },
    company: {
        title: 'компания',
        list: [{
                id: '1',
                name: 'о компании',
                link: '#'
            },
            {
                id: '2',
                name: 'наши преимущества',
                link: '#'
            },
            {
                id: '3',
                name: 'доставка и оплата',
                link: '#'
            },
            {
                id: '4',
                name: 'новости',
                link: '#'
            },
            {
                id: '5',
                name: 'правила возврата',
                link: '#'
            },
            {
                id: '6',
                name: 'контакты',
                link: '#'
            }
        ]
    },
    other: {
        title: 'другое',
        list: [{
            id: '1',
            name: 'распродажа',
            link: '#'
        },
        {
            id: '2',
            name: 'скидки',
            link: '#'
        },
        {
            id: '3',
            name: 'акции',
            link: '#'
        },
        {
            id: '4',
            name: 'бренды',
            link: '#'
        },
        {
            id: '5',
            name: 'отзывы',
            link: '#'
        },
        {
            id: '6',
            name: 'города',
            link: '#'
        }
    ]
    },
    phoneNumber: '+(067) 417 21 24'
}

const footerReducer = (state = initialState, action = {}) => {
    return state
}


export default footerReducer