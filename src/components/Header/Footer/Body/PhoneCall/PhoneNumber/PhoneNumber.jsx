import React, { useState } from 'react';
import { Modal } from 'antd';
import styled from "styled-components";
import phone from '../../../../../../assets/global/phone.svg'
import PhoneNumbersContainer from '../../../../../popup/PhoneNumbers/PhoneNumbersContainer';


const Div = styled.div`
    margin-bottom: 2px;
`
const Img = styled.div`
    display: block;
    width: 12px;
    height: 29px;
    margin-right: 8px;
    position: relative;
    img{
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    @media(max-width: 769px){
        width: 18px;
        height: 30px;
    }
    @media(max-width: 479px){
        width: 12px;
        height: 20px;
    }
`
const ButtonNumbers = styled.button`
    display: flex;
    align-items: center;
    padding-left: 18px;
    border: 0;
    background: none;

    position: relative;
    ::before{
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;

        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        border-top: 3px solid #888888;
    } 
`
const Text = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    color: #888888; 

    @media(max-width: 769px){
        display: none;
    }
`

const PhoneNumber = (props) => {
    const numberToCall = 'tel:' + props.phoneNumbers.replace(/\s/g, '').replace(/[()]/g, '');

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Div>
            <ButtonNumbers onClick={openModal} href={numberToCall}>
                <Img>
                    <img src={phone} alt="Phone" />
                </Img>
                
                <Text>{props.phoneNumbers}</Text>
            </ButtonNumbers>
            <Modal getContainer={false} bodyStyle={{padding: '0px'}} width={290} footer={null} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <PhoneNumbersContainer/>
            </Modal>
        </Div>
    )
}

export default PhoneNumber