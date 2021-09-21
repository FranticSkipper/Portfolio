import React from 'react'
import Basket from './Basket'
import { connect } from 'react-redux';
import { changeProductAmountActionCreator} from '../../../../../redux/payment-reducer'
const BasketContainer = (props) => {   

    return(
        <Basket 
            {...props}
            />
    )
}

const mapStateToProps = (state) => {
    return{
        basket: Object.values(state.payment.basket),
        goods: state.goods.goods,

    }
}
export default connect(mapStateToProps, {
    changeProductAmountActionCreator
})(BasketContainer)
