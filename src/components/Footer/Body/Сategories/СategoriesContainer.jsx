import React from 'react'
import { connect } from 'react-redux';
import Сategories from './Сategories'

const СategoriesContainer  = (props) => {

    return (
        <Сategories {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        catalog: state.footer.catalog,
        company: state.footer.company,
        other: state.footer.other
    }
}
export default connect(mapStateToProps, {})(СategoriesContainer)