import React, {useContext} from "react";
import {connect} from "react-redux";
import "./Footer.css"



function Footer({links, copyright}){
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

const mapStateToProps = state => {
    return {
        links: state.footer.links,
        copyright: state.footer.copyright
    }
}

export default connect(mapStateToProps, null)(Footer)