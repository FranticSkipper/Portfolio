import React from 'react'
import { connect } from 'react-redux';
import PersonalInformation from './PersonalInformation';
import {changePhoneActionCreator, changeFullNameActionCreator, changeEmailActionCreator} from '../../../../redux/payment-reducer'

const PersonalInformationContainer = (props) => {

    return (
        <PersonalInformation {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        fullName: state.payment.form.fullName,
        phone: state.payment.form.phone,
        email: state.payment.form.email
    }
}
export default connect(mapStateToProps, {
    changePhoneActionCreator,
    changeFullNameActionCreator,
    changeEmailActionCreator
})(PersonalInformationContainer)