import React from 'react'
import styled from 'styled-components'
import FormSideContainer from './FormSide/FormSideContainer'

const Div = styled.div`
    flex: 0 0 350px;
    background: #F9F9F9;
    margin-right: 22px;
    transition: .5s ease;
    @media(max-width: 1198px){
        flex: 0 0 300px;
    }
    @media(max-width: 768px){
        position: fixed;
        overflow-y: scroll;
        width: 100%;
        opacity: ${props => props.isFilterActive ? '1' : '0'};
        visibility: ${props => props.isFilterActive ? 'visible' : 'hidden'};
        
        top: 0;
        left: ${props => props.isFilterActive ? '0' : '-100%'};
        height: 100%;
        z-index: 150;
    }
    
`

const Filters = (props) => {
    return(
        <Div {...props}>
            <FormSideContainer setIsFilterActive={props.setIsFilterActive}/>
        </Div>
    )
}

export default Filters
