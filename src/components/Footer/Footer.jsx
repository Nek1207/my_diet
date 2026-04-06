import React from "react"

import logo from "./../../assets/logotype/logotype_white.svg"

import gh from "./../../assets/social/social_gh.svg"
import tg from "./../../assets/social/social_tg.svg"
import vk from "./../../assets/social/social_vk.svg"
import yt from "./../../assets/social/social_yt.svg"

import leafs from "./../../assets/content/cont_leafs.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__links">
                <div className="footer__links__images">
                    <img src={gh} alt="gh" className="footer__links__images-image" />
                    <img src={tg} alt="tg" className="footer__links__images-image" />
                    <img src={vk} alt="vk" className="footer__links__images-image" />
                    <img src={yt} alt="yt" className="footer__links__images-image" />
                </div>
                <h1 className="footer__links__title">© 2026, ASWACWAESACWA</h1>
            </div>
            <div className="footer__titles">
                <div className="footer__titles__texts">
                    <h1 className="footer__titles__texts-title">мой рацион</h1>
                    <h2 className="footer__titles__texts-subtitle">подсчёт калорийности</h2>
                </div>
                <img src={logo} alt="logo" className="footer__titles__logo" />
            </div>
            <img className="footer__leafs" src={leafs} alt="leafs" />
        </footer>
    )
}

export default Footer