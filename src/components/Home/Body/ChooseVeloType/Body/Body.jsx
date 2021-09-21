import React from 'react'
import Content from './Content/Content'
import TitleImgContainer from './TitleImg/TitleImgContainer'
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1470px;
    padding: 0 15px;
    margin: 0 auto;
`



const Body = () => {
    return (
        <Div>
            <TitleImgContainer/>
            <Content/>
        </Div>
    )
}

export default Body