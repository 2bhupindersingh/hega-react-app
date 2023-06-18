import React from "react";
import logo from "../../assets/images/logo.png";
import { PageLinks, SocialLinks } from "../navigation-link/links";
import Menu from "./Menu";
import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {PageLinks.map((item) => (
            <Menu id={item.id} hrefLink={item.hrefLink} text={item.text} />
          ))}
        </ul>

        <ul className="nav-icons">
          {SocialLinks.map((sociallink) => {
            return (
              <SocialMedia id={sociallink.id} hrefLink={sociallink.hrefLink} targetSocial={sociallink.targetSocial} socialIcon={sociallink.socialIcon}/>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
