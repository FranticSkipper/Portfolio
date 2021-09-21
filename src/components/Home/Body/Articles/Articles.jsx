import React from 'react'
import Body from './Body/Body'
import styled from 'styled-components'

const Div = styled.div`
    background: #F5FCE0;
    padding: 70px 0;
    position: relative;
    z-index: -1;
    @media(max-width: 991px){
        padding: 50px 0;
    }
    @media(max-width: 525px){
        padding: 30px 0;
    }
`

const Articles = () => {
    return (
        <Div>
            <Body/>
        </Div>
    )
}

export default Articles