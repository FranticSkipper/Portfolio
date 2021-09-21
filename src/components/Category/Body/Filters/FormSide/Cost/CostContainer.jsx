import React from 'react'
import { connect } from 'react-redux';
import Cost from './Cost';

const CostContainer = (props) => {

    let minCostLimit = props.goods[0].currentCost
    let maxCostLimit = props.goods[0].currentCost
    
    props.goods.forEach(el => {
        if(Number(el.currentCost) > Number(maxCostLimit)){
            maxCostLimit = Number(el.currentCost)
        }
        else if (Number(el.currentCost) < Number(minCostLimit)){
            minCostLimit = Number(el.currentCost)
        }
    })

 
    return(
       <Cost minCostLimit={minCostLimit} maxCostLimit={maxCostLimit}/>
    )
}

const mapStateToProps = (state) => {
    return{
    }
}
export default connect(mapStateToProps, {})(CostContainer)

