import React  from 'react'
import styled from 'styled-components'
import useWindowDimensions from '../../../../hooks/useWindowDimensions'
import MenuContainer from './Menu/MenuContainer'

const StyledBody = styled.div`
    max-width: 1470px;
    margin: 0 auto;
    padding: 0 15px;
    height: 100%;
    display: flex;
    align-items: center;
`

const Body = () => {
    const { width } = useWindowDimensions();
    return (
        <StyledBody>
            {width > 525 ? <MenuContainer/> : null}
        </StyledBody>
    )
}

export default Body