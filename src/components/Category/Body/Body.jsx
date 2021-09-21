import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { bodyLock, bodyUnlock } from '../../../functions'
import ContentContainer from './Content/ContentContainer'
import Filters from './Filters/Filters'

const Div = styled.div`
    display: flex;
    position: relative;
`

const Body = (props) => {
    const [isFilterActive, setIsFilterActive] = useState(false)
    useEffect(() => {
        if(isFilterActive){
            bodyLock()
        }
        else{
            bodyUnlock()
        }
    })
    return(
        <Div>
            <Filters setIsFilterActive={setIsFilterActive} isFilterActive={isFilterActive}/>
            <ContentContainer setIsFilterActive={setIsFilterActive}/>
        </Div>
    )
}

export default Body
