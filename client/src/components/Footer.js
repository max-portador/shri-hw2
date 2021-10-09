import React from "react";

export function Footer(){
    return (
        <footer className="footer">
            <div className="footer__left">
                <a href="#" className="footer__support">Support</a>
                <a href="#" className="footer_support">Learning</a>
                <a href="#" className="footer_support">Русская версия</a>
            </div>
            <div className="footer__right">
                © 2021 Maksim Shabanov
            </div>
        </footer>
    )
}