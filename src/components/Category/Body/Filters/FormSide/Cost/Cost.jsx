import React, { useState } from 'react'
import styled from 'styled-components'
import 'antd/dist/antd.css';
import { Slider, InputNumber } from "antd";

const Div = styled.div`
    .ant-slider-handle{
        border-color: #FFCC01;
        
    }
    .ant-slider-rail {
        background-color: #D0D0D0;
    }
    .ant-slider-track {
        background-color: #FFCC01;
    }
    .ant-slider:hover .ant-slider-track {
        background-color: #FFCC01;
    }
    .ant-slider-handle.ant-tooltip-open {
        border-color: #333333;
    }

`
const Row = styled.div`
    display: flex;
`

const Cost = (props) => {
    const [minValue, setMinValue] = useState(props.minCostLimit)
    const [maxValue, setMaxValue] = useState(props.maxCostLimit)
    
    const setMinValueInput = (el) => {
        const value = el
        setMinValue(value)
    }
    const setmaxMinValueInput = (el) => {
        const value = el
        setMaxValue(value)
    }
    const setValuesSlider = (el) => {
        const minValue = el[0]
        const maxValue = el[1]
        setMinValue(minValue)
        setMaxValue(maxValue)
    }
    
    return(
        <Div>
            <Row>
                <InputNumber
                    min={props.minCostLimit}
                    max={props.maxCostLimit}
                    style={{ margin: '0 16px' }}
                    value={minValue}
                    defaultValue={minValue}
                    onChange={setMinValueInput}
                />
                <InputNumber
                    min={props.minCostLimit}
                    max={props.maxCostLimit}
                    style={{ margin: '0 16px' }}
                    defaultValue={maxValue}
                    value={maxValue}
                    onChange={setmaxMinValueInput}
                />
            </Row>
            <Slider 
                min={props.minCostLimit}
                max={props.maxCostLimit}
                onChange={setValuesSlider}
                range={{ draggableTrack: false }} 
                value={[minValue, maxValue]}      
                defaultValue={[minValue, maxValue]}   
            />

        </Div>




    )
}

export default Cost