import React, { useState } from 'react'
import styled from 'styled-components'
import Post from './Post/Post'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 991px){
    }
`




const Posts = (props) => {
    const [postsAmount] = useState(3)
    
    const postsArr = []
    for( let i = props.articles.length - 1; i >= 0; i--){
        postsArr.push(props.articles[i])
        if(postsArr.length >= postsAmount){
            break
        }
    }

    const postsList = postsArr.map(el => 
        <Post key={el.id} date={el.date} title={el.title} image={el.image}/>
    )
    
    return (
        <Div>
            { postsList }
        </Div>
    )
}

export default Posts