const GET_USERNAME = 'GET-USERNAME';
const GET_PHONE_NUMBER = 'GET-PHONE-NUMBER';
const initialState = {
    form: {
        userName: '1',
        phoneNumber: ''
    }
}

const callbackPopap = (state = initialState, action = {}) => {
    switch(action.type){
        case GET_USERNAME:
            return{
                ...state,
                ...state.form.username = action.username
            }
           
            case GET_PHONE_NUMBER:
            return{
                ...state,
                ...state.form.phoneNumber = action.phoneNumber
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

export const getPhoneNumberActionCreator = (phoneNumber) => {
    return {
        type: GET_PHONE_NUMBER,
        phoneNumber: phoneNumber
    }
}

export default callbackPopap