import React from 'react'
import { connect } from 'react-redux';
import Catalog from './Catalog'


const CatalogContainer = (props) => {
    return (
        <Catalog {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        category: state.header.footer.category,
        menu: state.header.footer.menu
    }
}
export default connect(mapStateToProps, {})(CatalogContainer)