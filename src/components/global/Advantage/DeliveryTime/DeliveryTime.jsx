import React from 'react'
import img from '../../../../assets/global/advantage/deliveryTime/delivery-time.svg'
import styled from 'styled-components'



const Div = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirectionItem ? props.flexDirectionItem : 'column'};
    align-items: center;
    margin-right: ${props => props.marginRight ? props.marginRight : null};
    @media(max-width: 991px){
        flex: 1 1 33%;
        margin-right: 5px;
    }
    @media(max-width: 525px){
        margin-bottom: 15px;
        flex: 1 1 auto;
        margin-right: 0;

    }
`
const Img = styled.div`
    max-width: 105px;
    flex: 1 1 auto;

    display: flex;
    justify-content: center;
    align-content: center;
    margin-right: ${props => props.marginRight ? props.marginRight : 0};
    img{
        display: block;
        width: 100%;
    }
`
const Text = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 200%;
    color: #333333;
    span{
        display: ${props => props.extraText ? 'block' : 'none'};
        font-weight: bold;
    }
`


const DeliveryTime = (props) => {
    return(
        <Div  {...props}>
            <Img {...props}>
                <img src={img} alt="Срок доставки" />
            </Img>
            <Text {...props}>20 дней на обмен <span>или возврат велосипеда</span></Text>
        </Div>
    )
}

export default DeliveryTime