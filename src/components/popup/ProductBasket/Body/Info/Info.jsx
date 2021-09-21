import { CarOutlined } from '@ant-design/icons'
import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;  
    margin-bottom: 20px;
    svg{
        margin-right: 11px;
    }
    
`
const Text = styled.div`
    font-weight: normal;
    font-size: 14px;
    line-height: 143%;

    color: #888888;
    span{
        text-transform: uppercase;
    }
`

const Info = (props) => {   
    return(
        <Div>
            <CarOutlined style={ {fontSize: '18px'} }/>
            <Text>Доставка по Украине <span>БЕСПЛАТНО!</span></Text>
           
        </Div>
    )
}

export default Info
