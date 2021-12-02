import React from 'react'
import './Hero01.scss'
import banner from '../../asset/banner.png'
import arrow from '../../asset/arrow.png'
function Hero01() {
    return (
        <div className="Hero01">
            <div className="top-hero text-style-12 upper-text">launching open event!</div>
            <div className="what-text">
                <img src={banner} alt="banner" />
            </div>
            <div className="bottom-hero">
                <div className="borded text-style-14">
                    lorem ipsum
                </div>
                <img className="arrow" src={arrow} alt="arrow" />
                <div className="top-bot-borded text-style-14">
                    market lauching!
                </div>
                <img className="arrow" src={arrow} alt="arrow" />
                <div className="borded text-style-14">
                    lorem ipsum
                </div>
            </div>
        </div>
    )
}

export default Hero01

