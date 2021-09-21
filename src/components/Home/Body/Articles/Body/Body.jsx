import React from 'react'
import styled from 'styled-components'
import NetContainer from './Net/NetContainer'
import Title from './Title/Title'

const Div = styled.div`
    max-width: 1470px;
    padding: 0 15px;
    margin: 0 auto;
`

const Body = () => {
    return (
        <Div>
            <Title/>
            <NetContainer/>
        </Div>
    )
}

export default Body