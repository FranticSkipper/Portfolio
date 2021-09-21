import React from 'react'
import styled from 'styled-components'
import BrandsSliderContainer from './BrandsSlider/BrandsSliderContainer'

const Div = styled.div`
    max-width: 1470px;
    padding: 0 15px;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
 
`

const Body = (props) => {
    return(
        <Div>
            <BrandsSliderContainer/>
        </Div>
    )
}

export default Body
