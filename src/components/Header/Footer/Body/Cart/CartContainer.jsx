import React from 'react'
import Cart from './Cart'
import { connect } from 'react-redux';

const CardContainer = (props) => {

    return (
        <Cart {...props}/>
    )
}
const mapStateToProps = (state) => {
    return {
        basket: Object.keys( state.payment.basket).length
    }
}
export default connect(mapStateToProps, {})(CardContainer)