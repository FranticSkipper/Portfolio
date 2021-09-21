import React from 'react'
import { connect } from 'react-redux';
import Basket from './Basket';

const BasketContainer = (props) => {

    return (
        <Basket {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        basket: state.payment.basket,
        goods: state.goods.goods
    }
}
export default connect(mapStateToProps, {
    
})(BasketContainer)