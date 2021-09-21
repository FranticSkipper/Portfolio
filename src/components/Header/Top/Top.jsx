import React from 'react'
import Body from './Body/Body'
import styled from "styled-components";

const StyledTop = styled.div`
    width: 100%;
    background: #F9F9F9;
`

const Top = (props) => {
    return (
        <StyledTop>
            <Body/>
        </StyledTop>
    )
}

export default Top