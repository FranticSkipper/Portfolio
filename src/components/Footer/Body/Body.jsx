import React from 'react'
import styled from 'styled-components'
import AboutContainer from './About/AboutContainer'
import СategoriesContainer from './Сategories/СategoriesContainer'
import ContactsContainer from './Contacts/ContactsContainer'

const StyledBody = styled.div`
    max-width: 1470px;
    margin: 0 auto;
    padding: 0 15px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media(max-width: 991px){
        justify-content: space-around;
    }
    @media(max-width: 518px){
        flex-direction: column;
        align-items: center;
    }
`

const Body = () => {
    return (
       <StyledBody>
           <AboutContainer/>
           <СategoriesContainer/>
           <ContactsContainer/>
       </StyledBody>
    )
}

export default Body