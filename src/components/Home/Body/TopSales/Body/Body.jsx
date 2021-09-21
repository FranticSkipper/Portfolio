import React from 'react'
import styled from 'styled-components'
import TopSalesSliderContainer from './TopSalesSlider/TopSalesSliderContainer'

const Div = styled.div`
    max-width: 1470px;
    padding: 0 15px;
    margin: 0 auto;
`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    text-transform: uppercase;

    color: #333333;
    margin-bottom: 40px;
    @media(max-width: 991px){
        margin-bottom: 20px;
    }
`

const Body = () => {
    return (
        <Div>
            <Title>Топ продаж</Title>
            <TopSalesSliderContainer/>
        </Div>
    )
}

export default Body