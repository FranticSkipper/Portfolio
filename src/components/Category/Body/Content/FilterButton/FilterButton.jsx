import React from 'react'
import styled from 'styled-components'
import filterIcon from '../../../../../assets/global/filter.svg'
const Div = styled.div`
   margin-bottom: 15px;
   display: none;
   @media(max-width: 767px){
       display: block;
   }
`
const Button = styled.button`
    background: #FFCC01;
    border-radius: 5px;
    border: none;
    padding: 11px 68px 11px 36px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    color: #333333;
    position: relative;
    ::after{
        content: '';
        position: absolute;
        display: block;
        top: 50%;
        transform: translateY(-50%);
        left: 98px;
        width: 25px;
        height: 25px;
        background-image: url(${filterIcon});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
`

const FilterButton = (props) => {
    
    const buttonClick = (e) => {
        props.setIsFilterActive(true)
    }
    
    return(
        <Div>
            <Button onClick={buttonClick} filterIcon={filterIcon}>
                Фильтр
            </Button>
        </Div>


    )
}

export default FilterButton
