import React from 'react'
import styled from 'styled-components'
import Body from './Body/Body'

const Div = styled.div`
    padding: 42px 51px 48px 53px;
`

const PhoneNumbers = (props) => {   
    return(
        <Div>
            <Body {...props}/>
        </Div>    
    )
}

export default PhoneNumbers
