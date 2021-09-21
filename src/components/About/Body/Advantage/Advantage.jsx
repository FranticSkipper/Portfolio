import React from 'react'
import styled from 'styled-components'
import truck from '../../../../assets/global/truck-icon.svg'
import find from '../../../../assets/global/find-icon.svg'
import happiness from '../../../../assets/global/happiness-icon.svg'
const Div = styled.div`
    margin-bottom: 135px;
    @media(max-width: 991px){
        margin-bottom: 50px;
    }
    @media(max-width: 991px){
        margin-bottom: 20px;
    }
`
const Items = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media(max-width: 991px){
        justify-content: center;
    }
`
const Item = styled.div`
    flex: 0 1 30%;
    display: flex;
    @media(max-width: 991px){
        flex: 1 1 auto;
        :not(:last-child){
            margin-bottom: 30px;
        }
       
    }
`
const Img = styled.div`
    width: 70px;
    height: 70px;
    background: #000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    flex: 0 0 auto;
    img{
        display: block;
        width: 30px;
    }
    @media(max-width: 525px){
        display: none;
    }
`
const Content = styled.div`
    flex: 0 1 auto;
`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 116%;

    color: #333333;
    margin-bottom: 30px;
`
const Text = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 143%;

    color: #333333;
`
const SubTitle = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 116%;

    color: #333333;
    margin-bottom: 20px;
`



const Advantage = (props) => {
    return(
        <Div>
            <Title>Наши преимущества</Title>
            <Items>
                <Item>
                    <Img>
                        <img src={truck} alt="№" />
                    </Img>
                    <Content>
                        <SubTitle>Удобная доставка</SubTitle>
                        <Text>И конечно, любой товар можно заказать с доставкой. Мы доставляем по Киеву в течение одного дня, а по Украине — на следующий день. Всё — без предоплаты, если нужно — в кредит. Оплата наличная или безналичная — как вам удобнее.</Text>
                    </Content>
                </Item>
                <Item>
                    <Img><img src={find} alt="#" /></Img>
                    <Content>
                        <SubTitle>Дальше — больше</SubTitle>
                        <Text>Мы хотим, чтобы у наших клиентов вообще никогда не возникал вопрос «где найти что-то нужное». Поэтому теперь мы не только самый большой онлайн-ритейлер, но еще и площадка для продавцов. Кто-то начнет с нами свой первый бизнес (или расширит существующий), а кто-то — привезет в Украину продукты, которых пока нет. Это выгодно всем: и покупателям, и продавцам, и даже нам — ведь так мы поможем большему количеству людей стать немного счастливее.</Text>
                    </Content>
                </Item>
                <Item>
                    <Img>
                        <img src={happiness} alt="#" />
                    </Img>
                    <Content>
                        <SubTitle>Счастье начинается с простых вещей</SubTitle>
                        <Text>И мы помогаем найти эти вещи: влюбленным подсказываем, чем удивить друг друга; спортивных мотивируем никогда не сдаваться и быстрее прогрессировать; хозяйственным даем возможность создать настоящий уют. Мы хотим, чтобы вы знали, что ищете, и могли аргументировать свой выбор. Для этого мы снимаем видеообзоры, пишем статьи и отслеживаем новинки.</Text>
                    </Content>
                </Item>
            </Items>
        </Div>
    )
}

export default Advantage
