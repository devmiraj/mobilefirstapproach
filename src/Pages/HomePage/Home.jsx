import React from 'react'
import { Carts } from '../../Inc/cards/Carts'
import { HomeWrapper } from './style/HomeWrapper'
const Home = () => {
    return (
        <HomeWrapper>
            <div className="proWrapper">
                <Carts RowItem="twoCol"/>
                <Carts RowItem="twoCol"/>
                <Carts RowItem="twoCol"/>
                <Carts RowItem="twoCol"/>
                <Carts RowItem="twoCol"/>
            </div>
        </HomeWrapper>
    )
}

export default Home
