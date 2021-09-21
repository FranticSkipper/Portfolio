import React from 'react'
import styled from 'styled-components'
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import Popular from './Popular/Popular'
import Selected from './Selected/Selected'
import { Form, Field } from "react-final-form";
import ListItems from './ListItems/ListItems';
import CostContainer from './Cost/CostContainer';
import buttonClose from '../../../../../assets/global/close.svg';
const { Panel } = Collapse;

const CategoryForm = styled.form`
    position: relative;
    padding: 21px 0 27px;
    @media(max-width: 991px){
        padding: 35px 10px 35px;
    }
    .ant-collapse-item{
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 116%;
        color: #333333;
    }
    .ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow{
        transform: translateY(-50%) rotate(-90deg);
    }
    .ant-collapse-item-active > .ant-collapse-header .ant-collapse-arrow svg{
        transform: rotate(180deg)!important;
    }
    .ant-collapse-borderless > .ant-collapse-item:last-child,
    .ant-collapse > .ant-collapse-item:last-child{
        border: 0;
    }
`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #333333;
    padding: 0 23px;
    margin-bottom: 11px;
`
const Submit = styled.button`
    border: none;
    background: #FFCC01;
    width: 107px;
    height: 35px;

   font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    color: #333333;
    margin-top: 15px;
    margin-left: 15px;
`
const ButtonClose = styled.button`
   position: absolute;
   top: 19px;
   right: 16px;
   width: 15px;
   height: 15px;
   background: url(${buttonClose}) no-repeat 0 0/contain;

   border: none;
   display: none;
   @media(max-width: 768px){
       display: block;
   }
`

const FormSide = (props) => {
    const onSubmit = async (values) => {
      
    };
    const closeFilter = (e) => {
        e.preventDefault()
        props.setIsFilterActive(false)
    }
    
    return(
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <CategoryForm onSubmit={props.handleSubmit}>
                <Title>Фильтры</Title>  
                
                <Selected/>
                <Collapse bordered={false} expandIconPosition={'right'} defaultActiveKey={['1']}>
                    <Panel header="Популярное в категории" key="1"> 
                        <Popular popular={props.form.popular}/>
                    </Panel>                
                    <Panel header="Цена, грн." key="2"> 
                    <Field name="cost" {...props}>
                            {props => (
                                <CostContainer goods={props.goods}/> 
                            )}
                        </Field>
                        
                    </Panel>
                    <Panel header="Тип велосипеда" key="3">
                        <Field name="type" {...props}>
                            {props => (
                                <ListItems list={props.form.types} inputName={'type'}/> 
                            )}
                        </Field>
                            
                    </Panel>
                    <Panel header="Размер рамы" key="4">
                        <Field name="frameSize" {...props}>
                            {props => (
                                <ListItems list={props.form.sizes} inputName={'frameSize'}/> 
                            )}
                        </Field>
                    </Panel>
                    <Panel header="Диаметр колеса" key="5">
                        <Field name="wheelDiameter " {...props}>
                            {props => (
                                <ListItems list={props.form.wheelDiameter} inputName={'wheelDiameter'}/> 
                            )}
                        </Field>
                    </Panel>
                    <Panel header="Материал рамы" key="6">
                        <Field name="frameMaterial" {...props}>
                            {props => (
                                <ListItems list={props.form.frameMaterial} inputName={'frameMaterial'}/> 
                            )}
                        </Field>
                    </Panel>
                    <Panel header="Тип тормозов" key="7">
                        <Field name="brakeType" {...props}>
                            {props => (
                                <ListItems list={props.form.brakeType} inputName={'brakeType'}/> 
                            )}
                        </Field>
                    </Panel>
                    <Panel header="Год" key="8">
                        <Field name="year" {...props}>
                            {props => (
                                <ListItems list={props.form.year} inputName={'year'}/> 
                            )}
                        </Field>
                    </Panel>
                    <Panel header="Бренд" key="9">
                        <Field name="brands" {...props}>
                            {props => (
                                <ListItems list={props.form.brand} inputName={'brands'}/> 
                            )}
                        </Field>
                    </Panel>
                    <Panel header="Тип амортизации" key="10">
                        <Field name="depreciationType " {...props}>
                            {props => (
                                <ListItems list={props.form.depreciationType} inputName={'wheelDiameter'}/> 
                            )}
                        </Field>
                    </Panel>
                </Collapse>
                <Submit type='submit'>Показать</Submit>
                <ButtonClose onClick={closeFilter}></ButtonClose>
            </CategoryForm>
            )}
         /> 
    )
}

export default FormSide