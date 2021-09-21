const GET_USERNAME = 'GET-USERNAME';
const GET_EMAIL = 'GET-EMAIL';
const GET_PHONE_NUMBER = 'GET-PHONE-NUMBER';
const GET_COMMENT = 'GET-COMMENT';

const initialState = {
    form: {
        username: '',
        email: '',
        phoneNumber: '',
        comment: ''
    }
}

const contactsReducer = (state = initialState, action = {}) => {
    
    switch(action.type){
        
        case GET_USERNAME:
            return{
                ...state,
                ...state.form.username = action.username
            }
            case GET_EMAIL:
            return{
                ...state,
                ...state.form.email = action.email
            }
            case GET_PHONE_NUMBER:
            return{
                ...state,
                ...state.form.phoneNumber = action.phoneNumber
            }
            case GET_COMMENT:
            return{
                ...state,
                ...state.form.comment = action.comment
            }
        default:
            return{
                ...state
            }
    }
}

export const getUsernameActionCreator = (username) => {
    return {
        type: GET_USERNAME,
        username: username
    }
}
export const getEmailActionCreator = (email) => {
    return {
        type: GET_EMAIL,
        email: email
    }
}
export const getPhoneNumberActionCreator = (phoneNumber) => {
    return {
        type: GET_PHONE_NUMBER,
        phoneNumber: phoneNumber
    }
}
export const getCommentActionCreator = (comment) => {
    return {
        type: GET_COMMENT,
        comment: comment
    }
}

export default contactsReducer