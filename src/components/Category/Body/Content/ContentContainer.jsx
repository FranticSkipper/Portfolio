import React from 'react'
import Content from './Content'
import { connect } from 'react-redux';


const ContentContainer = (props) => {
    return(
      <Content {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        goods: state.goods.goods,
        goodsPerPage: state.goods.goodsPerPage,
        goodsAmount: state.goods.goods.length
    }
}
export default connect(mapStateToProps, {})(ContentContainer)
