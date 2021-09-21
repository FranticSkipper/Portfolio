import React from 'react'
import Body from './Body/Body'
import styled from 'styled-components'
const Div = styled.div`
    padding: 42px 0 60px;
    @media(max-width: 991px){
        padding: 42px 0 40px;
    }
    @media(max-width: 525px){
        padding: 32px 0 30px;
    }
`

const TopSales = () => {
    return (
        <Div>
            <Body/>
        </Div>
    )
}

export default TopSales