import React from 'react'
import { Form, Field } from "react-final-form";
import styled from 'styled-components'

const FormField = styled.form`
    display: flex;
    margin-bottom: 30px;
    @media(max-width: 1198px){
        flex-direction: column;
    }
    @media(max-width: 991px){
        margin-bottom: 20px;
    }
    @media(max-width: 525px){
        margin-bottom: 5px;
    }
    :first-child{
        margin-right: 60px;
       
    }
`
const Row = styled.div`
    display: flex;
    :first-child{
        margin-right: 55px;
        @media(max-width: 1198px){
            margin-bottom: 25px;
            margin-right: 0;
        }
    }
    @media(max-width: 525px){
        flex-direction: column;
        align-items: start;
    }
`
const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    color: #333333;
    margin-right: 30px;
    @media(max-width: 1198px){
        margin-right:  10px;
    }
    @media(max-width: 525px){
        margin-right: 0;
        margin-bottom: 10px;
    }
`
const Label = styled.label`
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    border-bottom: 1px solid #333333;

    color: #333333;
    
    display: flex;
    padding-right: 20px;
    position: relative;
    :not(:last-child){
        margin-right: 40px;
        @media(max-width: 1198px){
            margin-right: 25px;
        }
        @media(max-width: 525px){
            margin-right: 0;
        }
    }
    @media(max-width: 1350px){
        padding-right: 15px;
    }
    @media(max-width: 525px){
        margin-bottom: 10px;
        padding-right: 15px;
    }
`
const Text = styled.div`
    transition: .3s linear;
`
const Span = styled.span`
    transition: .3s linear;
    display: block;
    width: 10px;
    height: 10px;

    position: absolute;
    right: 0;
    top: 6px;

    width: 6px;
    height: 6px;
    border-top: 1px solid #333333;
    border-right: 1px solid #333333;



    transform: rotate(-45deg) translateX(0);

`

const Input = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    left: 0;
    top: 0;
    clip: rect(0 0 0 0);
    :checked + div{
        color: #0BB812;
    }
    :checked ~ span{
        
        border-color: #0BB812;
        transform: rotate(135deg) translateX(0);
        top: 3px;
    }
`


const Sort = (props) => {
    const onSubmit = async (values) => {
        
      };
      
    return(
        <Form
            onSubmit={onSubmit}
            initialValues={{
           
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
            <FormField onSubmit={handleSubmit}>  
                <Row>
                <Title>Сортировать по:</Title>
                    <Field name="cost">
                        {props => (
                            <Label>
                                <Input type="checkbox"/>
                                <Text>цене</Text>
                            <Span></Span>
                        </Label>
                        )}
                    </Field>
                    <Field name="popular">
                        {props => (
                            <Label>
                            <Input type="checkbox"/>
                            <Text>популярности</Text>
                            <Span></Span>
                        </Label>
                        )}
                    </Field>
                    <Field name="reviews">
                        {props => (
                            <Label>
                            <Input type="checkbox"/>
                            <Text>отзывам</Text>
                            <Span></Span>
                        </Label>
                        )}
                    </Field>
                </Row>
                
                <Row>
                    <Title>Показывать только:</Title>
                    <Field name="discont">
                        {props => (
                            <Label>
                            <Input type="checkbox"/>
                            <Text>со скидкой</Text>
                            <Span></Span>
                        </Label>
                        )}
                    </Field>
                </Row>
                
                
            </FormField>
            )}
        />


    )
}

export default Sort
