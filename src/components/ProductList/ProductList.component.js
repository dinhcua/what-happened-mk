import React from 'react'
import './ProductList.scss'
import ProductListItem from './ProductListItem.component'
import imgProduct from '../../asset/img_01.png'
import imgProduct1 from '../../asset/Layer 502.png'
import imgProduct2 from '../../asset/Layer 504.png'
import imgProduct3 from '../../asset/Layer 505.png'
import imgProduct4 from '../../asset/Layer 506.png'
import imgProduct5 from '../../asset/Layer 507.png'
import imgProduct6 from '../../asset/Layer 508.png'
import imgProduct7 from '../../asset/Layer 509.png'
import imgProduct8 from '../../asset/Layer 510.png'
import imgProduct9 from '../../asset/Layer 511.png'
import imgProduct10 from '../../asset/Layer 680.png'
import imgProduct11 from '../../asset/Layer 681.png'
import imgProduct12 from '../../asset/Layer 682.png'
import imgProduct13 from '../../asset/Layer 559.png'
import imgProduct14 from '../../asset/Layer 684.png'

export default function ProductList() {
    return (
        <>
            <div className="ProductList">
                <ProductListItem img={imgProduct}></ProductListItem>
                <ProductListItem img={imgProduct1}></ProductListItem>
                <ProductListItem img={imgProduct2}></ProductListItem>
                <ProductListItem img={imgProduct3}></ProductListItem>
                <ProductListItem img={imgProduct4}></ProductListItem>
                <ProductListItem img={imgProduct5}></ProductListItem>
                <ProductListItem img={imgProduct6}></ProductListItem>
                <ProductListItem img={imgProduct7}></ProductListItem>
                <ProductListItem img={imgProduct8}></ProductListItem>
                <ProductListItem img={imgProduct9}></ProductListItem>
                <ProductListItem img={imgProduct10}></ProductListItem>
                <ProductListItem img={imgProduct11}></ProductListItem>
                <ProductListItem img={imgProduct12}></ProductListItem>
                <ProductListItem img={imgProduct14}></ProductListItem>
                <ProductListItem img={imgProduct7}></ProductListItem>
                <ProductListItem img={imgProduct7}></ProductListItem>
                <ProductListItem img={imgProduct11}></ProductListItem>
                <ProductListItem img={imgProduct12}></ProductListItem>
                <ProductListItem img={imgProduct14}></ProductListItem>
                <ProductListItem img={imgProduct4}></ProductListItem>
                <ProductListItem img={imgProduct5}></ProductListItem>
                <ProductListItem img={imgProduct6}></ProductListItem>
                <ProductListItem img={imgProduct7}></ProductListItem>
                <ProductListItem img={imgProduct7}></ProductListItem>
                <ProductListItem img={imgProduct7}></ProductListItem>
                <ProductListItem img={imgProduct11}></ProductListItem>
                <ProductListItem img={imgProduct}></ProductListItem>
                <ProductListItem img={imgProduct1}></ProductListItem>
                <ProductListItem img={imgProduct2}></ProductListItem>
                <ProductListItem img={imgProduct3}></ProductListItem>
            </div>
            <div className="see-more-btn-box-mid">
                <div className="text-style-20 see-more-btn upper-text">see more</div>
            </div>
        </>
    )
}
