const ADD_NEW_PROCUCT = 'ADD-NEW-PROCUCT'
const DELETE_PROCUCT = 'DELETE-PROCUCT'
const CHANGE_PROCUCT_AMOUNT = 'CHANGE-PROCUCT-AMOUNT'
const CHANGE_FULLNAME = 'CHANGE-FULLNAME'
const CHANGE_PHONE = 'CHANGE-PHONE'
const CHANGE_EMAIL = 'CHANGE-EMAIL'

const initialState = {
    basket: [],
    form: {
        fullName: '',
        phone: '',
        email: ''
    }
}

const paymentReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case ADD_NEW_PROCUCT:
            return {
                ...state,
                basket: [...state.basket, {
                    id: action.productId,
                    amount: 1
                }]
            }
            case DELETE_PROCUCT:
                return {
                    ...state,
                    basket: state.basket.filter(el => {
                        if (Number(el.id) === Number(action.productId)) {
                            return false
                        } else {
                            return true
                        }
                    })
                }
                case CHANGE_PROCUCT_AMOUNT:
                    return {
                        ...state,
                        basket: state.basket.map(el => {
                            if (Number(el.id) === Number(action.productId)) {
                                if (!action.newAmount) {
                                    return {
                                        id: el.id,
                                        amount: el.amount + 1
                                    }
                                } else {
                                    return {
                                        id: el.id,
                                        amount: action.newAmount
                                    }
                                }

                            } else {
                                return {
                                    ...el
                                }
                            }
                        })
                    }
                    case CHANGE_FULLNAME:
                        return {
                            ...state,
                            ...state.form.fullName = action.fullName
                        }
                        case CHANGE_PHONE:
                            return {
                                ...state,
                                ...state.form.phone = action.phone
                            }
                            case CHANGE_EMAIL:
                                return {
                                    ...state,
                                    ...state.form.email = action.email
                                }
                                default: {
                                    return state
                                }
    }
}

export const addNewProductActionCreator = (productId) => {
    return {
        type: ADD_NEW_PROCUCT,
        productId: productId
    }
}
export const deleteProductActionCreator = (productId) => {
    return {
        type: DELETE_PROCUCT,
        productId: productId
    }
}
export const changeProductAmountActionCreator = (productId, newAmount) => {
    return {
        type: CHANGE_PROCUCT_AMOUNT,
        productId: productId,
        newAmount: newAmount
    }
}
export const changePhoneActionCreator = (phone) => {
    return {
        type: CHANGE_FULLNAME,
        phone: phone
    }
}
export const changeFullNameActionCreator = (fullName) => {
    return {
        type: CHANGE_PHONE,
        fullName: fullName
    }
}
export const changeEmailActionCreator = (email) => {
    return {
        type: CHANGE_EMAIL,
        email: email
    }
}




export default paymentReducer