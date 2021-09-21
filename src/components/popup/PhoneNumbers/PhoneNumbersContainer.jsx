import React from 'react'
import { connect } from 'react-redux';
import PhoneNumbers from './PhoneNumbers'

const PhoneNumbersContainer = (props) => {   
    return(
        <PhoneNumbers {...props}/>   
    )
}

const mapStateToProps = (state) => {
    return{
        phoneNumbers: state.header.footer.contacts.phoneNumbers
    }
}
export default connect(mapStateToProps, {})(PhoneNumbersContainer)
