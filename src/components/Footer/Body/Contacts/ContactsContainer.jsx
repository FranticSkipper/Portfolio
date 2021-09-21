import React from 'react'
import { connect } from 'react-redux';
import Contacts from './Contacts'

const ContactsContainer = (props) => {
    return (
       <Contacts {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        phoneNumber: state.header.footer.contacts.phoneNumbers[0]
    }
}
export default connect(mapStateToProps, {})(ContactsContainer)
