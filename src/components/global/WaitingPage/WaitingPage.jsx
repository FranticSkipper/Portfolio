import React from 'react'
import styled from "styled-components";


const Div = styled.div`
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
`

const WaitingPage = (props) => {
    return(
        <Div>
           Ожидание...
        </Div>
    )
}

export default WaitingPage
