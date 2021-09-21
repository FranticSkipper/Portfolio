import React from 'react'
import styled from "styled-components";
import Body from './Body/Body';

const Div = styled.div`
    padding: 0 15px;
    flex: 0 1 33%;
    display: flex;
    @media(max-width: 1350px){
        flex: 0 1 50%;
    }
    @media(max-width: 991px){
        flex: 0 1 100%;
        padding: 0 5px
    }
    @media(max-width: 768px){
        flex: 0 1 50%;
        padding: 0 5px
    }
    @media(max-width: 525px){
        flex: 0 1 100%;
        padding: 0 5px
    }
`

const Product = (props) => {

    return(
        <Div>
           <Body {...props}/>
        </Div>
    )
}

export default Product
