import React from 'react'
import styled from 'styled-components'
import Menu from './Menu/Menu'

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1 1 auto;
    margin-right: 150px;
    @media(max-width: 1198px){
        margin-right: 30px;
    }
    @media(max-width: 991px){
        order: -1;
        flex: 1 1 100%;
        justify-content: space-around;
        margin-bottom: 40px;
    }  
    @media(max-width: 518px){
        flex-direction: column;
        margin-bottom: 0;
        order: 1;
    }
`

const Сategories  = (props) => {
    return (
        <Div>
            <Menu name={props.catalog}/>
            <Menu name={props.company}/>
            <Menu name={props.other}/>
        </Div>
    )
}

export default Сategories 