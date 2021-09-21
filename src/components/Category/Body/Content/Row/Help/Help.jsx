import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
   max-width: 300px;
   @media(max-width: 991px){
       display: none;
   }
`

const Help = (props) => {
    const promptsList = props.prompts.map(el => <div key={el.id}> {el.text} </div>)
    return(
        <Div>
            {promptsList}
        </Div>
    )
}

export default Help
