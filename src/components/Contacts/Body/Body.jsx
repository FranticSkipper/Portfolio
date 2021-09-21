import { CalendarOutlined, MailOutlined, PhoneOutlined, ShareAltOutlined } from '@ant-design/icons'
import React from 'react'
import styled from 'styled-components'
import { itemColorActive, itemColorUnactive } from '../../../functions'
import BreadcrumbLine from '../../global/Breadcrumb/Breadcrumb'
import FeedbackContainer from './Feedback/FeedbackContainer'

const Div = styled.div`
    
`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    text-transform: uppercase;

    color: #333333;
    margin-bottom: 50px;
    @media(max-width: 991px){
        margin-bottom: 30px;
    }
    @media(max-width: 525px){
        margin-bottom: 10px;
    }
`
const Row = styled.div`
    display: flex;
    margin-bottom: 62px;
    @media(max-width: 1198px){
        flex-direction: column-reverse;
    }
    @media(max-width: 991px){
        margin-bottom: 0px;
    }
`
const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 0 1 735px;
    margin-right: 20px;
    @media(max-width: 1198px){
        flex: 0 0 auto;
    }
`
const Item = styled.div`
    flex: 1 1 50%;
    display: flex;
    margin-bottom: 80px;
    @media(max-width: 1198px){
        flex: 1 1 25%;
        margin-bottom: 40px;
    }
    @media(max-width: 991px){
        flex: 1 1 50%;
        justify-content: center;
    }
    @media(max-width: 525px){
        flex: 1 1 100%;
        margin-bottom: 25px;
        :nth-child(1){
            order: 3;
        }
        :nth-child(2){
            order: 2;
        }
        :nth-child(3){
            order: 4;
        }
        :nth-child(4){
            order: 1;
        }
    }

`
const Img = styled.div`
    width: 50px;
    height: 50px;
    background: #000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
`
const SubTitle = styled.div`
    margin-bottom: 8px;
`
const LinkPhone = styled.a`
    margin-bottom: 8px;
    color: #888888;
`
const LinkMail = styled.a`
    margin-bottom: 8px;
    color: #888888;
`
const Text = styled.div`
    margin-bottom: 8px;
`
const LinkSocial = styled.a`
    margin-bottom: 8px;
    text-decoration: underline;
    color: #888888;
`
const iconStyled = {color: '#fff', fontSize: '25px'}

const Body = (props) => {   
    
    return(
        <Div>
            <BreadcrumbLine/>
            
            <Title>Контакты</Title>
            <Row>
                <Items>
                    <Item>
                        <Img>
                            <PhoneOutlined style={iconStyled}/>
                        </Img>
                        <Content>
                            <SubTitle>Телефоны:</SubTitle>
                            <LinkPhone onMouseOut={itemColorUnactive} onMouseOver={itemColorActive} href="tel:380962553545">+38 (096) 255 35 45</LinkPhone>
                            <LinkPhone onMouseOut={itemColorUnactive} onMouseOver={itemColorActive} href="tel:380962451544">+38 (096) 245 15 44</LinkPhone>
                        </Content>
                    </Item>
                    <Item>
                        <Img>
                            <MailOutlined style={iconStyled}/>
                        </Img>
                        <Content>
                            <SubTitle>Email:</SubTitle>
                            <LinkMail onMouseOut={itemColorUnactive} onMouseOver={itemColorActive} href="mail:info@valostandart.com">info@valostandart.com</LinkMail>
                        </Content>
                    </Item>
                    <Item>
                        <Img>
                            <CalendarOutlined style={iconStyled}/>
                        </Img>
                        <Content>
                            <SubTitle>Режим работы:</SubTitle>
                            <Text>Круглосуточно</Text>
                        </Content>
                    </Item>
                    <Item>
                        <Img>
                            <ShareAltOutlined style={iconStyled}/>
                        </Img>
                        <Content>
                            <SubTitle>Мы в соцсетях:</SubTitle>
                            <LinkSocial onMouseOut={itemColorUnactive} onMouseOver={itemColorActive} href="#">facebook/velostandart</LinkSocial>
                            <LinkSocial onMouseOut={itemColorUnactive} onMouseOver={itemColorActive} href="#">instagram/velostandart</LinkSocial>
                            <LinkSocial onMouseOut={itemColorUnactive} onMouseOver={itemColorActive} href="#">youtube.com/velostandart</LinkSocial>
                        </Content>
                    </Item>
                </Items> 
                <FeedbackContainer/>
            </Row>
        </Div>
    )
}

export default Body
