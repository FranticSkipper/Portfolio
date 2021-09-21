import React from 'react'
import PhoneNumber from './PhoneNumber'
import { connect } from 'react-redux';

const PhoneNumberContainer = (props) => {
    return (
        <PhoneNumber {...props}/>
    )
}
const mapStateToProps = (state) => {
    return{
        phoneNumbers: state.header.footer.contacts.phoneNumbers[0]
    }
}


export default connect(mapStateToProps, {})(PhoneNumberContainer)