import React, {useContext} from "react";
import {FooterContext} from "../hooks/footer.context";
import "./Footer.css"



export function Footer(){

    const {links, copyright} = useContext(FooterContext)


    return (
        <footer className="footer">
            <div className="footer__left">
                {
                    links.map( (link, id) => (
                    <a href={link.href} className="footer__support" key={id}>{link.label}</a>
                    ))
                }
            </div>
            <div className="footer__right">
                © {copyright}
            </div>
        </footer>
    )
}