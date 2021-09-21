import { RightOutlined } from '@ant-design/icons';
import React from 'react'
import styled from 'styled-components'
import { itemColorActive, itemColorUnactive } from '../../../../../functions';

const Li = styled.li`
    :not(:last-child){
            margin-bottom: 6px;
        }
`
const Button = styled.button`
        display: flex;
        justify-content: space-between;
        align-content: center;

        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        
        width: 100%;
        color: #888888;
        padding: 10px 12px;
        background: #fff;
        border: 0;
`

const imgStyle = { color: 'inherit', fontSize: '20px'}

const Сategory = (props) => {
    const changeMenuValue = () => {
        props.setMenuValue(props.value)
        props.setIsSideActive(true)
    }
    return (
        <Li
            onClick={changeMenuValue}
            onMouseOver={ itemColorActive } 
            onMouseOut={itemColorUnactive}>
            <Button>
                {props.name} 
                <RightOutlined style={imgStyle} />
            </Button>
        </Li>
    )
}

export default Сategory