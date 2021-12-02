import React from 'react'
import './BestProduct.scss'
import ProductItem from './ProductItem.component'
import product_1 from '../../asset/product_1.png'
import product_2 from '../../asset/product_2.png'
import product_3 from '../../asset/product_3.png'
function BestProducts() {
    return (
        <div className="brand">
            <div className="brand-content test">
                <p className="brand-headding text-style-19 upper-text mb30 Bright-orange">best product</p>
                <p className="brand-text text-style-16 Bright-orange">How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first</p>
            </div>
            <div className="brand-list-test">
                <ProductItem productImg={product_1} number="1"></ProductItem>
                <ProductItem productImg={product_2} number="2"></ProductItem>
                <ProductItem productImg={product_3} number="3"></ProductItem>
            </div>
        </div>
    )
}

export default BestProducts
