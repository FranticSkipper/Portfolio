import React from 'react'
import PostsContainer from './Posts/PostsContainer'
import styled from 'styled-components'

const Div = styled.div`
    flex: 0 1 59%;
    @media(max-width: 1198px){
        flex: 0 1 49%;
    }
    @media(max-width: 991px){
        flex: 1 1 auto;
    }
`

const History = (props) => {
    return (
        <Div>
            <PostsContainer itemsPageSize={props.itemsPageSize} currentPage={props.currentPage}/>
        </Div>
    )
}

export default History