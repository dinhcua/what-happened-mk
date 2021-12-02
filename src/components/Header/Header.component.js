import React from 'react'
import './Header.scss'
import logo from '../../asset/logo.png'
import hubicon from '../../asset/hubicon.png'
export default function Header() {
    return (
        <div className="header ">
            <div className="left-nav">
                <img src={logo} alt="logo" />
            </div>
            <ul className="right-nav text-style-11">
                <li className="right-nav-item">introduction</li>
                <li className="right-nav-item">solution</li>
                <li className="right-nav-item">rate plan</li>
                <li className="dashed"></li>
                <li className="right-nav-item">login</li>
                <li className="right-nav-item">apply for free user</li>
            </ul>
            <div className="icon">
                <img src={hubicon} alt="" />
            </div>
        </div>
    )
}
