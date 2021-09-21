import React, { useState } from 'react'
import { Modal } from 'antd';
import styled from "styled-components";
import CallbackRequestContainer from '../../../../../popup/CallbackRequest/CallbackRequestContainer';



const ButtonPopup = styled.button`
    display: block;
    width: 100%;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    background: none;
    border: 0;
    text-decoration-line: underline;
    color: #0BB812;
   
    @media(max-width: 769px){
        display: none;
    }
`

const Callback = () => {
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
        <div>
            <ButtonPopup type="button" onClick={showModal}> Заказать обратный звонок </ButtonPopup>
            <Modal  getContainer={false} bodyStyle={{padding: '0px'}} width={460} footer={null} visible={isPopupOpen} onOk={handleOk} onCancel={handleCancel}>
                <CallbackRequestContainer/>
            </Modal>
        </div>
    )
}

export default Callback