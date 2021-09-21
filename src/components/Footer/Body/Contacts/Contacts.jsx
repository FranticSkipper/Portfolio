import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 220px;
    @media(max-width: 512px){
        margin-bottom: 30px;
    }
`

const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    margin-bottom: 15px;
    ::first-letter{
        text-transform: uppercase;
    }
`
const Text = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #999;
    margin-bottom: 20px;
`
const Row = styled.div`
    margin-bottom: 10px;
`
const Link = styled.a`
    transition: .2s linear;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;

    color: #FFCC01;
    cursor: pointer;
    margin-bottom: 7px;
    position: relative;
    ::before{
        content: '+38 ';
    }
`
const Button = styled.button`
    align-self: flex-start;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #FFCC01;
    cursor: pointer;
    background: none;
    border: 0;
    border-bottom: 2px dotted #FFCC01;
`
const Contacts = (props) => {
    const LinkActive = event => {
        const el = event.target;
        let styleTransform = "scale(1.1) translateX(8px)";
        el.style.transform = styleTransform;
    };
    const LinkUnactive = event => {
        const el = event.target;
        let styleTransform = "scale(1) translateX(0)";
        el.style.transform = styleTransform;
    };
    return (
       <Div>
           <Title>интернет веломагазин</Title>
           <Text>
               <Row>г. Киев </Row>
               <Row>Прием заказов по телефону </Row>
               <Row>Ежедневно с 09:00 до 20:00</Row> 
            </Text>
           <Text>
               <Row>Прием заказов через сайт</Row>
               <Row>Круглосуточно ПН-ВС </Row>  
           </Text>

           <Link href="#" onMouseOut={LinkUnactive} onMouseOver={LinkActive}> {props.phoneNumber} </Link>
           <Button>Перезвоните мне</Button>
       </Div>
    )
}

export default Contacts