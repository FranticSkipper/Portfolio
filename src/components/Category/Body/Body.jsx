import React, { useState } from 'react'
import styled from 'styled-components'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import ContentContainer from './Content/ContentContainer'
import Filters from './Filters/Filters'
import { Modal } from 'antd';

const Div = styled.div`
    display: flex;
    position: relative;
`

const Body = (props) => {
    const [isFilterActive, setIsFilterActive] = useState(false)
    const { width } = useWindowDimensions();

    const showModal = () => {
        setIsFilterActive(true);
      };
    
      const handleOk = () => {
        setIsFilterActive(false);
      };
    
      const handleCancel = () => {
        setIsFilterActive(false);
      };
    return(
        <Div>
            {
                width > 768 ? 
                <Filters isFilterActive={isFilterActive}/>:
                <Modal style={{top: '0'}} bodyStyle={{padding: '0'}} getContainer={false} width={'100%'} visible={isFilterActive} onOk={handleOk} onCancel={handleCancel}>
                    <Filters setIsFilterActive={setIsFilterActive} isFilterActive={isFilterActive}/>
                </Modal>
            }
            
            <ContentContainer showModal={showModal}/>
        </Div>
    )
}

export default Body
