import React from 'react'
import Cost from './Cost/Cost'
import Delivery from './Delivery/Delivery'
import DeliveryTime from './DeliveryTime/DeliveryTime'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: ${props => props.colored ? '#F6FCE0' : null};
    padding: 35px 10px 40px;
    @media(max-width: 991px){
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 25px 10px 30px;
    }
    @media(max-width: 525px){
        flex-direction: column;
        padding: 10px 5px 00px;
    }
`

const Advantage = (props) => {
    return(
        <Div {...props}>
            <Delivery {...props} marginRight={props.marginRight}/>
            <DeliveryTime {...props} marginRight={props.marginRight}/>
            <Cost {...props}/>
        </Div>
    )
}

export default Advantage