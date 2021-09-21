import React from 'react'
import styled from 'styled-components'
import { paginate } from '../../../../../../functions'
import Post from './Post/Post'

const Div = styled.div`
    
`




const Posts = (props) => {
    const pageItems = paginate(props.articles, props.currentPage, props.itemsPageSize)
    const postsList = pageItems.map(el => 
        <Post key={el.id} date={el.date} title={el.title} text={el.text} image={el.image}/>
    )

    return (
        <Div>
            { postsList }
        </Div>
    )
}

export default Posts