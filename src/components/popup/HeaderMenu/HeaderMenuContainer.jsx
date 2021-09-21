import React from 'react'
import { connect } from 'react-redux';
import HeaderMenu from './HeaderMenu'

const HeaderMenuContainer = (props) => {
    return (
        <HeaderMenu {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        category: state.header.footer.category,
        menu: state.header.footer.menu
    }
}
export default connect(mapStateToProps, {})(HeaderMenuContainer)