import Menu from './Menu';
import React from 'react'
import { connect } from 'react-redux';

const MenuContainer = (props) => {

    return (
        <Menu {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        menu: state.header.top.menu
    }
}
export default connect(mapStateToProps, {})(MenuContainer)