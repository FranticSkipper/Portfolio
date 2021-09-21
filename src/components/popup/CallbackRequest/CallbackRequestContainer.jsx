import React from 'react'
import { connect } from 'react-redux';
import CallbackRequest from './CallbackRequest';


const CallbackRequestContainer = (props) => {   
    return(
        <CallbackRequest {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        userName: state.callbackPopap.form.userName,
        phoneNumber: state.callbackPopap.form.phoneNumber
    }
}
export default connect(mapStateToProps, {})(CallbackRequestContainer)
