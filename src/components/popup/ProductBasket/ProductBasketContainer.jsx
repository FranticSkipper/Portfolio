import React from 'react'
import { connect } from 'react-redux';
import ProductBasket from './ProductBasket'



const ProductBasketContainer = (props) => {   
    return(
        <ProductBasket {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        goods: state.goods.goods,
        basket: state.payment.basket
    }
}
export default connect(mapStateToProps, {})(ProductBasketContainer)
