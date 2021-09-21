import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 50%;
    :nth-child(odd){
        color: #FFFFFF;
        background: #EF4155;  
    }
    :nth-child(even){
        color: #333333;
        background: #FFCC01;
    }

    

    color: #FFFFFF;
`
const Text = styled.div`
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 117%;
    text-align: center;
`

const Label = (props) => {

    return(
        <Div>
            <Text> {props.text} </Text>
        </Div>
    )
}
export default Label
