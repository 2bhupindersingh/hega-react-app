import React from "react";
import { PageLinks, SocialLinks } from "../navigation-link/links";
import FooterMenu from "./FooterMenu";
import FooterSocialMedia from "./FooterSocialMedia";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {PageLinks.map((item) => (
          <FooterMenu id={item.id} hrefLink={item.hrefLink} text={item.text}/>
        ))}
      </ul>
      <ul className="footer-icons">
        {SocialLinks.map((sociallink) => {
          const {id, hrefLink, targetSocial, socialIcon} = sociallink
          return (
            <FooterSocialMedia id={id} hrefLink={hrefLink} targetSocial={targetSocial} socialIcon={socialIcon}/>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
