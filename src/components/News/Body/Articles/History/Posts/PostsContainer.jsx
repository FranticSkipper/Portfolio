import React from 'react'
import Posts from './Posts'
import { connect } from 'react-redux';





const PostsContainer = (props) => {


    return (
        <Posts {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        articles: state.articles.articles
    }
}
export default connect(mapStateToProps, {})(PostsContainer)