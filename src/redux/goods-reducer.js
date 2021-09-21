import item1 from '../assets/global/goods/images/item-1.png'
import item2 from '../assets/global/goods/images/item-2.png'
import item3 from '../assets/global/goods/images/item-3.png'

const initialState = {
    prompts: [{
            id: '1',
            text: 'Го́рный велосипе́д (англ. mountain bike, сокращённо MTB) — велосипед, предназначенный для катания вне дорог.'
        }
        // {id: '2', text: 'Фэтба́йк или фатба́йк (англ. fatbike от fat — «толстый») — разновидность горного велосипеда на широких покрышках (колёсах).'},
        // {id: '3', text: 'Электр́ический велосип́ед (Электровелосипед, пауэрбайк, e-bike, pedelec  (англ.)) представляет собой велосипед с электрическим приводом, который частично или полностью обеспечивает его движение.'}
    ],
    goods: [
        {
            id: '0',
            image: item1,
            labels: ["Скидка 20%", 'Лидер продаж'],
            title: 'Велосипед WINNER BETTY 24" WINNER 2020 Sounture',
            rating: 1.7,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                },
                {
                    color: 'green'
                },
                {
                    color: 'pink'
                }

            ],
            isStock: true,
            oldCost: '12456',
            currentCost: '9965',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Ghost']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '1',
            image: item2,
            labels: [],
            title: 'Велосипед 29" Marin BOBCAT TRAIL  2021 Gloss',
            rating: 4.1,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '19401',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [20]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Apollo']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '2',
            image: item3,
            labels: [],
            title: 'Велосипед Kona Process 134 CR/DL 29"',
            rating: 4.8,
            colors: [{
                    color: 'red'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '197202',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Карбон']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Kona']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '3',
            image: item1,
            labels: ["Скидка 20%", 'Лидер продаж'],
            title: 'Велосипед WINNER BETTY 24" WINNER 2020 Sounture',
            rating: 1.7,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                },
                {
                    color: 'green'
                },
                {
                    color: 'pink'
                }

            ],
            isStock: true,
            oldCost: '12456',
            currentCost: '9965',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Ghost']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '4',
            image: item2,
            labels: [],
            title: 'Велосипед 29" Marin BOBCAT TRAIL  2021 Gloss',
            rating: 4.1,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '19401',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [20]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Apollo']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '5',
            image: item3,
            labels: [],
            title: 'Велосипед Kona Process 134 CR/DL 29"',
            rating: 4.8,
            colors: [{
                    color: 'red'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '197202',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Карбон']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Kona']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '6',
            image: item1,
            labels: [],
            title: 'Велосипед WINNER BETTY 24" WINNER 2020 Sounture',
            rating: 1.7,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                },
                {
                    color: 'green'
                },
                {
                    color: 'pink'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '7654',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Ghost']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '7',
            image: item2,
            labels: [],
            title: 'Велосипед 29" Marin BOBCAT TRAIL  2021 Gloss',
            rating: 4.1,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '19401',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [20]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Apollo']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '8',
            image: item3,
            labels: [],
            title: 'Велосипед Kona Process 134 CR/DL 29"',
            rating: 4.8,
            colors: [{
                    color: 'red'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '197202',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Карбон']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Kona']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '9',
            image: item1,
            labels: [],
            title: 'Велосипед WINNER BETTY 24" WINNER 2020 Sounture',
            rating: 1.7,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                },
                {
                    color: 'green'
                },
                {
                    color: 'pink'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '7654',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Ghost']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '10',
            image: item2,
            labels: [],
            title: 'Велосипед 29" Marin BOBCAT TRAIL  2021 Gloss',
            rating: 4.1,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '19401',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [20]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Apollo']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '11',
            image: item3,
            labels: [],
            title: 'Велосипед Kona Process 134 CR/DL 29"',
            rating: 4.8,
            colors: [{
                    color: 'red'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '197202',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Карбон']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Kona']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '12',
            image: item1,
            labels: [],
            title: 'Велосипед WINNER BETTY 24" WINNER 2020 Sounture',
            rating: 1.7,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                },
                {
                    color: 'green'
                },
                {
                    color: 'pink'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '7654',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Ghost']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '13',
            image: item2,
            labels: [],
            title: 'Велосипед 29" Marin BOBCAT TRAIL  2021 Gloss',
            rating: 4.1,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '19401',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [20]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Apollo']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '14',
            image: item3,
            labels: [],
            title: 'Велосипед Kona Process 134 CR/DL 29"',
            rating: 4.8,
            colors: [{
                    color: 'red'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '197202',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Карбон']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Kona']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '15',
            image: item1,
            labels: [],
            title: 'Велосипед WINNER BETTY 24" WINNER 2020 Sounture',
            rating: 1.7,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                },
                {
                    color: 'green'
                },
                {
                    color: 'pink'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '7654',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Ghost']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '16',
            image: item2,
            labels: [],
            title: 'Велосипед 29" Marin BOBCAT TRAIL  2021 Gloss',
            rating: 4.1,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '19401',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [20]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Apollo']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '17',
            image: item3,
            labels: [],
            title: 'Велосипед Kona Process 134 CR/DL 29"',
            rating: 4.8,
            colors: [{
                    color: 'red'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '197202',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Карбон']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Kona']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '18',
            image: item1,
            labels: [],
            title: 'Велосипед WINNER BETTY 24" WINNER 2020 Sounture',
            rating: 1.7,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                },
                {
                    color: 'green'
                },
                {
                    color: 'pink'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '7654',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Ghost']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '19',
            image: item2,
            labels: [],
            title: 'Велосипед 29" Marin BOBCAT TRAIL  2021 Gloss',
            rating: 4.1,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '19401',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [20]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Apollo']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '20',
            image: item3,
            labels: [],
            title: 'Велосипед Kona Process 134 CR/DL 29"',
            rating: 4.8,
            colors: [{
                    color: 'red'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '197202',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Карбон']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Kona']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '21',
            image: item1,
            labels: [],
            title: 'Велосипед WINNER BETTY 24" WINNER 2020 Sounture',
            rating: 1.7,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                },
                {
                    color: 'green'
                },
                {
                    color: 'pink'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '7654',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Ghost']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '22',
            image: item2,
            labels: [],
            title: 'Велосипед 29" Marin BOBCAT TRAIL  2021 Gloss',
            rating: 4.1,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '19401',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [20]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Apollo']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '23',
            image: item3,
            labels: [],
            title: 'Велосипед Kona Process 134 CR/DL 29"',
            rating: 4.8,
            colors: [{
                    color: 'red'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '197202',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Карбон']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Kona']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '24',
            image: item1,
            labels: [],
            title: 'Велосипед WINNER BETTY 24" WINNER 2020 Sounture',
            rating: 1.7,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                },
                {
                    color: 'green'
                },
                {
                    color: 'pink'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '7654',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Ghost']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '25',
            image: item2,
            labels: [],
            title: 'Велосипед 29" Marin BOBCAT TRAIL  2021 Gloss',
            rating: 4.1,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '19401',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [20]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Apollo']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '26',
            image: item3,
            labels: [],
            title: 'Велосипед Kona Process 134 CR/DL 29"',
            rating: 4.8,
            colors: [{
                    color: 'red'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '197202',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Карбон']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Kona']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '27',
            image: item1,
            labels: [],
            title: 'Велосипед WINNER BETTY 24" WINNER 2020 Sounture',
            rating: 1.7,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                },
                {
                    color: 'green'
                },
                {
                    color: 'pink'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '7654',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Ghost']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '28',
            image: item2,
            labels: [],
            title: 'Велосипед 29" Marin BOBCAT TRAIL  2021 Gloss',
            rating: 4.1,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '19401',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [20]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Apollo']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '29',
            image: item3,
            labels: [],
            title: 'Велосипед Kona Process 134 CR/DL 29"',
            rating: 4.8,
            colors: [{
                    color: 'red'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '197202',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Карбон']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Kona']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '30',
            image: item1,
            labels: [],
            title: 'Велосипед WINNER BETTY 24" WINNER 2020 Sounture',
            rating: 1.7,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                },
                {
                    color: 'green'
                },
                {
                    color: 'pink'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '7654',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Ghost']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '31',
            image: item2,
            labels: [],
            title: 'Велосипед 29" Marin BOBCAT TRAIL  2021 Gloss',
            rating: 4.1,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '19401',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [20]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Apollo']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '32',
            image: item3,
            labels: [],
            title: 'Велосипед Kona Process 134 CR/DL 29"',
            rating: 4.8,
            colors: [{
                    color: 'red'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '197202',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Карбон']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Kona']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '33',
            image: item1,
            labels: [],
            title: 'Велосипед WINNER BETTY 24" WINNER 2020 Sounture',
            rating: 1.7,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                },
                {
                    color: 'green'
                },
                {
                    color: 'pink'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '7654',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [29]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Ghost']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        },
        {
            id: '34',
            image: item2,
            labels: [],
            title: 'Велосипед 29" Marin BOBCAT TRAIL  2021 Gloss',
            rating: 4.1,
            colors: [{
                    color: 'red'
                },
                {
                    color: 'blue'
                }

            ],
            isStock: true,
            oldCost: '',
            currentCost: '19401',
            parameters: [
                {
                    id: '0',
                    title: 'Размеры рам',
                    values: [22, 23, 24, 25, 26]
                },
                {
                    id: '1',
                    title: 'Размер колеса',
                    values: [20]
                },
                {
                    id: '2',
                    title: 'Материал рамы',
                    values: ['Алюминий']
                },
                {
                    id: '3',
                    title: 'Бренд',
                    values: ['Apollo']
                }
            ],
            comments: [{
                    id: '1'
                },
                {
                    id: '2'
                }
            ]
        }
    ],
    goodsPerPage: 6
}

const goodsReducer = (state = initialState, action = {}) => {
    return state
}


export default goodsReducer