import React from 'react'
import Menu from './Menu'
import { connect } from 'react-redux';

const MenuContainer = (props) => {
    return(
        <Menu {...props}/>
    )
}
const mapStateToProps = (state) => {
    return{
        menu: state.home.menu
    }
}


export default connect(mapStateToProps, {})(MenuContainer)
