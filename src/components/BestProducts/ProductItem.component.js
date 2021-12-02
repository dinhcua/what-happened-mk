import React from 'react'
import './BestProduct.scss'
function ProductItem(props) {
    return (
        <div className="product">
            <img src={props.productImg} alt="products" />
            <span className="tag text-style-17">{props.number}</span>
            <div className="box">
                <span className="text-style-20">How to create <br /> mobile-optimized</span>
                <span className="text-style-20 goTag text-upper">GO</span>
            </div>
        </div>
    )
}

export default ProductItem
