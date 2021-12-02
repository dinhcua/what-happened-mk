import React from 'react'
import './HappendIssue.scss'
import nike from '../../asset/brand_1.png'
import levi from '../../asset/brand_2.png'
import dyson from '../../asset/brand_3.png'
import loci from '../../asset/brand_4.png'
import arrow from '../../asset/arrow.png'
import tag2 from '../../asset/tag-2.png'
import tag3 from '../../asset/tag-3.png'
import tagHot from '../../asset/hot-tag.png'
export default function HappendIssue() {
    return (
        <div className="HappendIssue">
            <div className="brand-content">
                <p className="brand-headding text-style-19 upper-text mb30">Happened's iusse</p>
                <p className="brand-text text-style-8-c">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
            </div>
            <div className="see-more-btn-box">
                <div className="text-style-20 upper-text see-more-btn">see more</div>
            </div>
            <div className="brand-list">
                <div className="brand-arrow brand-box">
                    <p className="whpn-text text-style-19 ">whpn <br /> issue</p>
                    <div className="arrow-image">
                        <img src={arrow} alt="" />
                    </div>
                    <img className="tag2" src={tag2} alt="tag2" />
                </div>
                <div className=" brand-box">
                    <div className="brandName upper-text text-style-24">
                        b brand
                    </div>
                    <img src={nike} alt="" />
                    <img className="tagHot" src={tagHot} alt="" />
                </div>
                <div className=" brand-box">
                    <div className="brandName upper-text text-style-24">
                        c brand
                    </div>
                    <img src={levi} alt="" />
                </div>
                <div className=" brand-box">
                    <div className="brandName upper-text text-style-24">
                        d brand
                    </div>
                    <img src={dyson} alt="" />
                    <img className="tag3" src={tag3} alt="" />
                </div>
                <div className=" brand-box">
                    <div className="brandName upper-text text-style-24">
                        e brand
                    </div>
                    <img src={loci} alt="" />
                </div>
            </div>
        </div>
    )
}
