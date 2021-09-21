import React from 'react'
import { connect } from 'react-redux';
import BasketItem from './BasketItem'
import {changeProductAmountActionCreator} from '../../../../../../redux/payment-reducer'
import {deleteProductActionCreator} from '../../../../../../redux/payment-reducer'


const BasketItemContainer = (props) => {
 
    return (
        <BasketItem {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
    }
}
export default connect(mapStateToProps, {
    changeProductAmountActionCreator,
    deleteProductActionCreator
})(BasketItemContainer)