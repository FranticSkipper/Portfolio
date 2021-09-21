import React from 'react'
import { connect } from 'react-redux';
import FormField from './FormField';
import { сhangeFormTextActionCreator } from '../../../../../redux/header-reducer';


const FormFieldContainer = (props) => {
    return (
        <FormField {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        formField: state.header.footer.formField
    }
}
export default connect(mapStateToProps, {
    сhangeFormTextActionCreator
}
)(FormFieldContainer)