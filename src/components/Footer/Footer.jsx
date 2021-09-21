import React from 'react'
import Body from './Body/Body'
import styled from 'styled-components'

const Div = styled.div`
    background: #333333;
    padding: 60px 0;
    @media(max-width: 525px){
        padding: 40px 0;
    }
`
const Footer = () => {
    return (
        <Div>
            <Body/>
        </Div>
    )
}

export default Footer