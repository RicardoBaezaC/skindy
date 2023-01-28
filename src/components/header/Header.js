import './Header.css'

import { useState } from 'react'

const Header = () => {

    const [isMenuShowing, setIsMenuShowing] = useState(false)

    const toggleMenu = () => {
        setIsMenuShowing(!isMenuShowing)
    }

    return (
        <div className="header sticky">
            <div className="header-logo-container">
                <div className="header-logo" alt="logo-skindy"></div>
            </div>
            <nav className="top-nav-container">
                <ul className={`top-nav-list ${isMenuShowing ? "show-menu" : ""}`}>
                    <li className="top-nav-item">
                        <a href="#a">Sobre nosotros</a>
                    </li>
                    <li className="top-nav-item">
                        <a href="#a">Productos</a>
                    </li>
                    <li className="top-nav-item">
                        <a href="#a">Skincare</a>
                    </li>
                    <li className="top-nav-item" >
                        <a href="#contact">Contáctanos</a>
                    </li>
                </ul>
                <div className="burguer-nav-container">
                    <span className="burguer-button" onClick={toggleMenu} style={isMenuShowing ? {fontSize: "28px", fontWeight: "bolder"} : {}}>
                        { isMenuShowing ? "x" : "≡" }
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Header