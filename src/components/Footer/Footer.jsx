import React from "react"

import "./../Footer/Footer.scss"

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
                    <a href="https://github.com/Nek1207" target="_blank"><img src={gh} alt="gh" className="footer__links__images-image" /></a>
                    <a href="https://t.me/@project_nek_official" target="_blank"><img src={tg} alt="tg" className="footer__links__images-image" /></a>
                    <a href="https://vk.com/project_nek.official" target="_blank"><img src={vk} alt="vk" className="footer__links__images-image" /></a>
                    <a href="https://www.youtube.com/@project_nek.official" target="_blank"><img src={yt} alt="yt" className="footer__links__images-image" /></a>
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