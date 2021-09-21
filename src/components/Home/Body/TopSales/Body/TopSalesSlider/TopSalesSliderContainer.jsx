import React from 'react'
import { connect } from 'react-redux';
import TopSalesSlider from './TopSalesSlider';
import { addNewProductActionCreator, changeProductAmountActionCreator } from '../../../../../../redux/payment-reducer'

const TopSalesSliderContainer = (props) => {
    return(
        <TopSalesSlider {...props}/>
    )
}
const mapStateToProps = (state) => {
    return{
        topSales: state.home.topSales,
        goods: state.goods.goods,
        basket: state.payment.basket
    }
}

export default connect(mapStateToProps, {
    addNewProductActionCreator,
    changeProductAmountActionCreator,
})(TopSalesSliderContainer)
