import React from 'react'
import FormSide from './FormSide';
import { connect } from 'react-redux';

const FormSideContainer = (props) => {

    return(
        <FormSide {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        form: state.category.form,
        goods: state.goods.goods
    }
}
export default connect(mapStateToProps, {})(FormSideContainer)