import React from 'react'
import Net from './Net'
import { connect } from 'react-redux';


const NetContainer = (props) => {

    return (
        <Net {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        articles: state.home.articles
    }
}
export default connect(mapStateToProps, {})(NetContainer)
