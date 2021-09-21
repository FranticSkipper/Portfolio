import Item from './Item/Item';
import React from 'react'
import styled from 'styled-components'
import FormFieldContainer from '../../../Header/Footer/Body/FormField/FormFieldContainer';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import MenuContainer from '../../../Header/Top/Body/Menu/MenuContainer';

const Div = styled.div`
    background: #F9F9F9;
    flex: 0 0 300px;
    padding: 42px 18px 42px 22px;
    @media(max-width: 998px){
        padding: 36px 10px 38px;
        flex: 0 0 300px;
    }
    @media (max-width: 768px) {
        flex: 1 1 100%;
    }
    @media(max-width: 525px){
        flex: 1 1 auto;
    }
`
const Nav = styled.nav`
    @media(max-width: 525px){
        margin-bottom: 33px;
    }
`
const Ul = styled.div`
    display: flex;
    flex-direction: column;;
`



const Сategory = (props) => {
    const { width } = useWindowDimensions();
    const categoryList = props.category.map(el =>
        <Item setIsSideActive={props.setIsSideActive} key={el.id} value={el.value} link={el.link} name={el.name} setMenuValue={props.setMenuValue}/>
        )
    return (
        <Div>
            {width <= 998 ? <FormFieldContainer/> :  null}
            <Nav>
                <Ul>
                    { categoryList }    
                </Ul>
            </Nav>
            {width < 525 ? <MenuContainer/> : null}
        </Div>
    )
}

export default Сategory