import React from 'react'
import styled from 'styled-components'
import Advantage from '../../../../global/Advantage/Advantage'
import HelpContainer from './Help/HelpContainer'

const Div = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   @media(max-width: 991px){
       justify-content: center;
   }
`

const Row = (props) => {
    return(
        <Div>
            <HelpContainer/>
            <Advantage marginRight={'5px'} flexDirectionItem={'row'}/>
        </Div>
    )
}

export default Row
