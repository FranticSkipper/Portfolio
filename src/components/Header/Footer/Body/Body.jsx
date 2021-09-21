import React, { useState } from 'react'
import Logo from './Logo/Logo'
import styled from 'styled-components'
import CatalogBtn from './CatalogBtn/CatalogBtn'
import PhoneCall from './PhoneCall/PhoneCall'
import CartContainer from './Cart/CartContainer'
import Burger from './Burger/Burger'
import FormFieldContainer from './FormField/FormFieldContainer'
import useWindowDimensions from '../../../../hooks/useWindowDimensions'
import { Modal } from 'antd';
import HeaderMenuContainer from '../../../popup/HeaderMenu/HeaderMenuContainer'

const Div = styled.div`
    max-width: 1470px;
    margin: 0 auto;
    padding: 14px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background: #fff;
`

const Body = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const {width } = useWindowDimensions();
    const showModal = () => {
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
            <Logo/>  
            <CatalogBtn showModal={showModal}/>
            {width > 991 ? <FormFieldContainer/> : null}
            <PhoneCall/>
            <CartContainer/>
            <Burger showModal={showModal}/>
            <Modal bodyStyle={{padding: '0'}} getContainer={false} width={width <= 991 ? '100%' : 1470} footer={false} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <HeaderMenuContainer/>
            </Modal>
        </Div>
    )
}

export default Body