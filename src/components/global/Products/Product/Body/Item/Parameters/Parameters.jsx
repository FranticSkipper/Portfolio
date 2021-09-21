import React from 'react'
import styled from "styled-components";
import Row from './Row/Row'
const Div = styled.div`
    width: 100%;
    background-color: inherit;
    
`
const Parameters = (props) => {   
        
    const parametrsList = props.parameters.map(el => <Row key={el.id} parametr={el}/>)
    
    return(
        <Div>
            { parametrsList }
        </Div>
    )
}

export default Parameters
