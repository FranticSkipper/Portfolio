import React from 'react'
import styled from 'styled-components'
import PostsContainer from './Posts/PostsContainer'

const Div = styled.div`
    background: #F5FCE0;
    padding: 43px 56px 92px;
    margin-right: 87px;
    align-self: start;
    flex: 0 1 39%;
    @media(max-width: 1198px){
        flex: 0 1 49%;
        margin-right: 0;
    }
    @media(max-width: 991px){
        flex: 1 1 auto;
        width: 100%;
        margin-bottom: 20px;
    }
    @media(max-width: 991px){
        padding: 23px 16px 32px;
    }
`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #333333;
    margin-bottom: 31px;
    @media(max-width: 991px){
        margin-bottom: 21px;
    }
`



const LastNews = () => {
    return (
        <Div>
            <Title>Последние новости</Title>
            <PostsContainer/>
        </Div>
    )
}

export default LastNews