import React, { useState } from 'react'
import styled from 'styled-components'
import { Modal } from 'antd';
import basket from '../../../../../assets/global/card.svg'
import ProductBasketContainer from '../../../../popup/ProductBasket/ProductBasketContainer';

const Div = styled.div`
    padding-right: 12px;
    @media (max-width: 991px
        ){
        margin-right: 30px;
    }
    @media(max-width: 525px){
        margin-right: 10px;
    }
`
const Button = styled.button`
    max-width: 50px;
    position: relative;
    background: none;
    border: 0;
`

const Img = styled.img`
    display: block;
    width: 100%;
    @media (max-width: 498px){
        width: 26px;
        height: 26px;
    }
`

const Span = styled.div`
    display: block;
    width: 28px;
    height: 28px;
    background: #0BB812;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    color: #FFFFFF;
    position: absolute;
    top: -8px;
    right: -12px;
    @media (max-width: 498px){
        width: 20px;
        height: 20px;
        font-size: 12px;
        line-height: 14px;
    }
`

const Card = (props) => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const showModal = () => {
        setIsPopupOpen(true);
    };
    const handleOk = () => {
        setIsPopupOpen(false);
    };
    
    const handleCancel = () => {
        setIsPopupOpen(false);
    };

    return (    
        <Div>
            <Button onClick={showModal}>
                <Img src={basket} alt="Корзина" />
                <Span className='counter'>{props.basket}</Span>
            </Button>
            <Modal getContainer={false} bodyStyle={{padding: '0px'}} width={460} footer={null} visible={isPopupOpen} onOk={handleOk} onCancel={handleCancel}>
                <ProductBasketContainer/>
            </Modal>
        </Div>
    )
}

export default Card