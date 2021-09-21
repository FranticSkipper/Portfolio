import React from 'react'
import Articles from './Articles/Articles'
import Brands from './Brands/Brands'
import ChooseVeloType from './ChooseVeloType/ChooseVeloType'
import TopSales from './TopSales/TopSales'

const Body = () => {
    return (
        <div>
            <ChooseVeloType/>
            <Brands/>
            <TopSales/>
            <Articles/>
        </div>
    )
}

export default Body