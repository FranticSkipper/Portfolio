import React from 'react';
import styled from 'styled-components';
import sadSmile from '../../../../../assets/global/sad-smile-icon.svg'


const Div = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
`
const Text = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 116%;

    color: #333333;
`
const Img = styled.div`
    width: 20px;
    position: relative;
    img{
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`


const NoGoods = (props) => {
   
    return (
        <Div>
           <Text>Нет в наличии</Text>
           <Img>
                <img src={sadSmile} alt="" />
           </Img>
        </Div>
    )
}

export default NoGoods


