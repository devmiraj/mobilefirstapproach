import React from 'react'
import { ProCardWrapper } from './ProCardWrapper'
import Laptop from '../../Assets/Images/laptop.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../Button/Button'
export const Carts = ({RowItem}) => {
    return (
        <ProCardWrapper asasas={'RowItem'}>
            <div className={`innerCards ${RowItem}`}>
                <img src={Laptop}/>
                <div className="details">
                    <span className="prices">$1200</span>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="spcefication">
                    <span>Msi i7th 12GB GTXi 1350</span>
                </div>
                <div className="action">
                    <Button text="Buy Now" color="dark"/>
                    <Button text="Add to Cart" color="yellow"/>
                </div>
            </div>
        </ProCardWrapper>
    )
}
