const GET_EMAIL = 'GET-EMAIL';
const initialState = {
    email: ''
}

const aboutReducer = (state = initialState, action = {}) => {
    switch(action.type){
        case GET_EMAIL:
            return{
                ...state,
                email: action.email
            }
        default:
            return{
                ...state
            }
    }
}

export const getEmailActionCreator = (email) => {
    return {
        type: GET_EMAIL,
        email: email
    }
}

export default aboutReducer