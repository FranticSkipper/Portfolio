import React from 'react'
import styled from "styled-components";
import Item from './Item/Item';

const Div = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;
     flex: 1 1 auto;
`


const Body = (props) => {

    return(
        <Div>
           <Item {...props}/>
        </Div>
    )
}

export default Body
