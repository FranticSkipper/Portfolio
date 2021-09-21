import femaleBike from '../assets/home/menu/female-bice.png'
import childBicycle from '../assets/home/menu/child-bicycle.png'
import cityBike from '../assets/home/menu/city-bike.png'
import doubleSuspensionBike from '../assets/home/menu/double-suspension-bike.png'
import mountainBike from '../assets/home/menu/mountain-bike.png'
import foldingBike from '../assets/home/menu/folding-bike.png'
import bmx from '../assets/home/menu/bmx.png'
import fatBike from '../assets/home/menu/fat-bike.png'
import roadBike from '../assets/home/menu/road-bike.png'
import electricBike from '../assets/home/menu/electric-bike.png'
import titleImg from '../assets/home/bike.png'

import boardman from '../assets/home/brands/boardman-logo.png'
import fireeye from '../assets/home/brands/fireeye-logo.png'
import flame from '../assets/home/brands/flame-logo.png'
import harley from '../assets/home/brands/harley-davidson-logo.png'
import inc from '../assets/home/brands/inc-logo.png'
import motor from '../assets/home/brands/motor-logo.png'
import speedy from '../assets/home/brands/speedy-logo.png'
import velonews from '../assets/home/brands/velonews-logo.png'

import bike1 from '../assets/home/topsales/bike-1.png'
import bike2 from '../assets/home/topsales/bike-2.png'
import bike3 from '../assets/home/topsales/bike-3.png'
import bike4 from '../assets/home/topsales/bike-4.png'

import articleBg from '../assets/home/articles/article-backgroud.jpg'

const initialState = {
    titleImage: titleImg,
    menu: [{
            id: '1',
            image: mountainBike,
            title: 'Горные',
            link: '/category'
        },
        {
            id: '2',
            image: cityBike,
            title: 'Городские',
            link: '/category'
        },
        {
            id: '3',
            image: doubleSuspensionBike,
            title: 'Двухподвесные',
            link: '/category'
        },
        {
            id: '4',
            image: childBicycle,
            title: 'Детские',
            link: '/category'
        },
        {
            id: '5',
            image: femaleBike,
            title: 'Женские',
            link: '/category'
        },
        {
            id: '6',
            image: foldingBike,
            title: 'Складные',
            link: '/category'
        },
        {
            id: '7',
            image: bmx,
            title: 'Трюковые',
            link: '/category'
        },
        {
            id: '8',
            image: fatBike,
            title: 'Фэтбайки',
            link: '/category'
        },
        {
            id: '9',
            image: roadBike,
            title: 'Щоссейные',
            link: '/category'
        },
        {
            id: '10',
            image: electricBike,
            title: 'Электровелосипед',
            link: '/category'
        }
    ],
    sponsors: [{
            id: '1',
            image: boardman
        },
        {
            id: '2',
            image: fireeye
        },
        {
            id: '3',
            image: flame
        },
        {
            id: '4',
            image: harley
        },
        {
            id: '5',
            image: inc
        },
        {
            id: '6',
            image: motor
        },
        {
            id: '7',
            image: speedy
        },
        {
            id: '8',
            image: velonews
        },
    ],
    topSales: [{
            id: '1',
            image: bike1,
            title: 'Велосипед WINNER BETTY 24" WINNER 2020 Sounture',
            oldCost: '14 999',
            currentCost: '12 999',
            labels: ['Скидка 20%', 'Лучшая цена']
        },
        {
            id: '2',
            image: bike2,
            title: 'Велосипед WINNER BETTY 24" WINNER 2020 Sounture',
            oldCost: '18 999',
            currentCost: '17 999',
            labels: ['Скидка 20%', 'Лучшая цена']
        },
        {
            id: '3',
            image: bike3,
            title: 'Велосипед WINNER BETTY 24" WINNER 2020 Sounture',
            oldCost: '12 999',
            currentCost: '8 999',
            labels: ['Скидка 20%', 'Лучшая цена']
        },
        {
            id: '4',
            image: bike4,
            title: 'Велосипед WINNER BETTY 24" WINNER 2020 Sounture',
            oldCost: '12 999',
            currentCost: '8 999',
            labels: ['Скидка 20%', 'Лучшая цена']
        }
    ],
    articles: [
        {id: '1', title: 'как подобрать велосипед по росту?', image: articleBg},
        {id: '2', title: 'как подобрать велосипед по росту?', image: articleBg},
        {id: '3', title: 'как подобрать велосипед по росту?', image: articleBg}
    ]
}

const homeReducer = (state = initialState, action = {}) => {
    return state
}


export default homeReducer