import React from 'react'
import './Video.scss'
import eVideo from '../../asset/-e-Video.png'
export default function Video() {
    return (
        <div className="Video">
            <div className="brand-content video-up">
                <p className="brand-headding text-style-19 upper-text mb30">what happened</p>
                <p className="brand-text text-style-16 mb30">How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first</p>
                <div className="see-more-btn-box-right">
                    <div className="see-more-btn text-style-20 upper-text">see more</div>
                </div>
            </div>
            <div className="video-contain">
                <img src={eVideo} alt="video" />
            </div>
        </div>
    )
}
