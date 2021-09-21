import React from 'react'
import BrandsSlider from './BrandsSlider'
import { connect } from 'react-redux';

const BrandsSliderContainer = (props) => {
    return(
        <BrandsSlider {...props}/>
    )
}
const mapStateToProps = (state) => {
    return{
        sponsors: state.home.sponsors
    }
}

export default connect(mapStateToProps, {})(BrandsSliderContainer)
