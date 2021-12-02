import React from 'react'
import './ProductList.scss'
import heartIcon from '../../asset/Heart_icon.png'
export default function ProductListItem(props) {
    return (
        <div className="ProductListItem">
            <img src={props.img} alt="product" />
            <p className="text-style-21">[What happen] How to create</p>
            <div className="des text-style-20-m">
                <div className="price">
                    2.500 won
                </div>
                <div className="heart">
                    <img src={heartIcon} alt="heartIcon" />
                    236
                </div>
            </div>
        </div>
    )
}
