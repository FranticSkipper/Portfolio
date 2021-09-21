import { createStore, combineReducers } from 'redux'
import categoryReducer from './category-reducer'
import headerReducer from './header-reducer'
import homeReducer from './home-reducer'
import footerReducer from './footer-reducer'
import goodsReducer from './goods-reducer'
import articlesReducer from './articles-reducer'
import paymentReducer from './payment-reducer'
import aboutReducer from './about-reducer'
import contactsReducer from './contacts-reducer'
import callbackPopap from './callbackPopap-reducer'
const reducers = combineReducers({
    category: categoryReducer,
    header: headerReducer,
    home: homeReducer,
    goods: goodsReducer,
    footer: footerReducer,
    articles : articlesReducer,
    payment: paymentReducer,
    about: aboutReducer,
    contacts: contactsReducer,
    callbackPopap: callbackPopap
})

const store = createStore(reducers)



export default store








// state = {

//     home: {
//         menu: [],
//         sponsors: [],
//         slider: [],
//         topSales: [],
//     },
//     category: {
//         filters: {
//             selected: [],
//             popular: [],
//             type: [],
//             size: [],
//             wheel: [],
//             material: [],
//             year: [],
//             brake: [],
//             brand: [],
//             amortisation: []
//         },
//         menu: {}
//     },
//     card: {}
// }