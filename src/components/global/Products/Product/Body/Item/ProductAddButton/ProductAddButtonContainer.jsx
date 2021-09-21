import React from 'react'
import { connect } from 'react-redux';
import ProductAddButton from './ProductAddButton';
import { addNewProductActionCreator, changeProductAmountActionCreator } from '../../../../../../../redux/payment-reducer';

const ProductAddButtonContainer = (props) => {
    
    return(
        <ProductAddButton {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        basket: state.payment.basket
    }
}

export default connect(mapStateToProps, 
    {
        addNewProductActionCreator,
        changeProductAmountActionCreator
    }
)(ProductAddButtonContainer)
