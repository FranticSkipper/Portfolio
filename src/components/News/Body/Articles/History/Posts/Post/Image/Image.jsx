import React from 'react'
import styled from 'styled-components'

const Img = styled.time`
    margin-right: 28px;
    flex: 0 0 250px;
    display: flex;
    align-items: center;
    @media(max-width: 1198px){
        flex: 0 1 auto;
        margin-bottom: 20px;
        margin-right: 0;
    }
    @media(max-width: 991px){
        margin-right: 28px;
        flex: 0 0 180px;
    }
    img{
        display: block;
        width: 100%;
    }
`



const Image = (props) => {
    return (
        <Img>
            <img src={props.image} alt={props.image} />
        </Img>
    )
}

export default Image