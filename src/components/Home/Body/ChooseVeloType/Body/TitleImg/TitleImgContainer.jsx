import React from 'react'
import TitleImg from './TitleImg'
import { connect } from 'react-redux';

const TitleImgContainer = (props) => {
 
    return(
        <TitleImg {...props}/>
    )
}
const mapStateToProps = (state) => {
    return{
        titleImage: state.home.titleImage
    }
}
export default connect(mapStateToProps, {})(TitleImgContainer)
