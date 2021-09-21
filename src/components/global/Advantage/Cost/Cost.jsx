import React from 'react'
import img from '../../../../assets/global/advantage/cost/cost.png'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirectionItem ? props.flexDirectionItem : 'column'};
    align-items: center;
    @media(max-width: 991px){
        flex: 1 1 33%;
        margin-right: 5px;
    }
    @media(max-width: 525px){
        flex: 1 1 auto;
        margin-right: 0;
    }
`
const Img = styled.div`
    max-width: 105px;
    flex: 1 1 auto;

    margin-right: ${props => props.marginRight ? props.marginRight : 0};
    display: flex;
    justify-content: center;
    align-content: center;
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

const Cost = (props) => {
    return(
        <Div {...props}>
            <Img {...props}>
                <img src={img} alt="Доставка" />
            </Img>
            <Text {...props}>доставка по украине- <span>бесплатно от 3000 грн</span></Text>
        </Div>
    )
}

export default Cost