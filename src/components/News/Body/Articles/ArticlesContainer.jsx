import React from 'react'
import { connect } from 'react-redux';
import Articles from './Articles'



const ArticlesContainer = (props) => {
    return (
        <Articles {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
       itemsPageSize: state.articles.articlesPerPage,
       itemsAmount: state.articles.articles.length
    }
}
export default connect(mapStateToProps, {})(ArticlesContainer)