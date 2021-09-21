import React from 'react'
import { connect } from 'react-redux';
import Subscribe from './Subscribe';
import {getEmailActionCreator} from '../../../../redux/about-reducer'


const SubscribeContainer = (props) => {
    return(
        <Subscribe {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        email: state.about.email
    }
}
export default connect(mapStateToProps, {
    getEmailActionCreator
})(SubscribeContainer)
