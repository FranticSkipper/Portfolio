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
        flex: 1 1 auto;
        margin-right: 0;
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
