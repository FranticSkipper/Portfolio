import React from 'react'
import { connect } from 'react-redux';
import Feedback from './Feedback'
import {getUsernameActionCreator, getEmailActionCreator, getPhoneNumberActionCreator, getCommentActionCreator} from '../../../../redux/contacts-reducer'
const FeedbackContainer = (props) => {
    return (
        <Feedback {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        username: state.contacts.form.username,
        email: state.contacts.form.email,
        phoneNumber: state.contacts.form.phoneNumber,
        comment: state.contacts.form.comment
    }
}
export default connect(mapStateToProps, {
    getUsernameActionCreator,
    getEmailActionCreator,
    getPhoneNumberActionCreator,
    getCommentActionCreator
})(FeedbackContainer)