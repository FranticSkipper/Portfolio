import React from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../../../../../../hooks/useWindowDimensions';
import CloseButton from './CloseButton/CloseButton';
import NoGoods from './NoGoods/NoGoods';
import SubMenus from './SubMenus/SubMenus';


const Div = styled.div`
    width: 100%;
    background: #fff;
    padding: 42px 52px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    transition: .7s ease-out;

    @media (max-width: 991px) {
        flex-wrap: none;
        align-items: start;
    }
    @media (max-width: 768px) {
        padding: 25px 21px 25px 19px;
    }
    @media(max-width: 525px){
        position: absolute;
        top: 0;
        opacity: ${props => props.isSideActive ? '1' : '0'};
        visibility: ${props => props.isSideActive ? 'visible' : 'hidden'};
        height: ${props => props.isSideActive ? 'auto' : '80px'};
        right: ${props => props.isSideActive ? '0' : '-100%'};

    }
`


const Menus = (props) => {
    const { width } = useWindowDimensions();

    let currentMenuValue = []
    
    props.menu.forEach(el => {
        if(el.name === props.menuValue){
            currentMenuValue = el.values.concat()
        }
    })
    const menuList = currentMenuValue.map(el =>
        <SubMenus key={el.id} title={el.title} values={el.values}/>
    )
    return (
        <Div {...props}>
            {width <= 525 ? <CloseButton setIsSideActive={props.setIsSideActive}/> : null}
            {currentMenuValue.length === 0 ? <NoGoods/> : null}
            { menuList }
        </Div>
    )
}

export default Menus


